import React, { Component } from 'react';
import Input from "../../components/input/input";
import config from "Config";
import { checkValidity, updateObject } from "../../components/utility/utilitiy";
import classes from "./panaroma.scss";

import axios from '../../axios-orders';

import DbButton from "../../components/buttons/dbButton";

class panaroma extends Component {
    state = {
        panaromaForm: {
            attachment: {
                elementType: "file",
                elementConfig: {
                    placeholder: "Dosya Seç",
                    visible: "false",
                    multiple: false,
                    accept: config.file.acceptedFiles
                },
                files: null,
                value: "",
                validation: {
                    required: false
                },
                isValid: true,
                isTouched: false,
                customInput: true
            }
        }
    };


    inputChangedHandler = (event, inputIdentifier) => {
        let updatingObject = {
            value: event.target.value,
            isValid: checkValidity(
                event.target.value,
                this.state.panaromaForm[inputIdentifier].validation
            ),
            isTouched: true
        };

        let fileValid = true;
        if (event.target.type === "file") {
            const fileExtensions = config.file.acceptedFiles.split(",");
            const existingFiles = this.state.panaromaForm[inputIdentifier].files ? this.state.panaromaForm[inputIdentifier].files : [];

            let totalFileSize = existingFiles.reduce((acc, file) => {
                return acc + file.size;
            }, 0);

            if (event.target.files.length > 0) {
                for (const file of event.target.files) {
                    totalFileSize += file.size;

                    // if (
                    //     fileExtensions.filter(
                    //         f =>
                    //             f.indexOf(
                    //                 file.name
                    //                     .split(".")
                    //                     .pop()
                    //                     .toLowerCase()
                    //             ) !== -1
                    //     ).length === 0
                    // ) {
                    //     fileValid = false;
                    //     this.props.showDangerModal(`'${
                    //         file.name
                    //     }' dosyasının uzantısı uygun değildir!
                    //     Uygun dosya uzantıları: ${config.file.acceptedFiles}`);
                    //     break;
                    // } else if (file.size === 0) {
                    //     fileValid = false;
                    //     this.props.showDangerModal(
                    //         `'${
                    //             file.name
                    //         }' dosyasının boyutu 0 byte olamaz!`
                    //     );
                    //     break;
                    // } else if (file.size > config.file.limitPerFile) {
                    //     fileValid = false;
                    //     this.props.showDangerModal(
                    //         `'${
                    //             file.name
                    //         }' dosyasının boyutu geçerli limit olan ${config.file.limitPerFile/1024/1024}MB den fazladır!`
                    //     );
                    //     break;
                    // }
                    // else if(totalFileSize > config.file.limitTotal)
                    // {
                    //     fileValid = false;
                    //     this.props.showDangerModal(
                    //         `Dosyaların toplam boyutu geçerli limit olan ${config.file.limitTotal/1024/1024}MB den fazladır!`
                    //     );
                    //     break;
                    // }
                }
            }

            //Ilk bastaki bos arraye ve mevcut arraylere secilenleri ekler.
            //fileValid uygunluguna bakar comment icindeki
            if (fileValid === true) {
                updatingObject = {
                    ...updatingObject,
                    files: existingFiles.concat([...event.target.files])
                };

            } else {
                updatingObject = {
                    ...updatingObject,
                    value: "",
                    isValid: checkValidity(
                        "",
                        this.state.panaromaForm[inputIdentifier].validation
                    )
                };
            }
        }

        const updatedFormElement = updateObject(
            this.state.panaromaForm[inputIdentifier],
            updatingObject
        );

        const updatedPanaromaForm = updateObject(this.state.panaromaForm, {
            [inputIdentifier]: updatedFormElement
        });

        let formIsValid = true;
        for (let key in updatedPanaromaForm) {
            formIsValid = updatedPanaromaForm[key].isValid && formIsValid;
        }

        this.setState({
            panaromaForm: updatedPanaromaForm,
            formIsValid: formIsValid
        });
    };

    onFileCancel = (index) => {
        const files = [...this.state.panaromaForm.attachment.files];

        files.splice(index, 1);

        this.setState(prevState => ({
            ...prevState,
            panaromaForm: {
                ...prevState.panaromaForm,
                attachment: {
                    ...prevState.panaromaForm.attachment,
                    files: files
                }
            }
        }));
    }

    onSubmit = (arg, event) => {
        

        let formData = new FormData();

        formData.append(
            "panaroma",
            this.state.panaromaForm.attachment.files[0],
            this.state.panaromaForm.attachment.files[0].name
        );

        if (arg === "pansutas" ) {
            console.log("pansutas")
            axios.put('/panaroma/SendPansutasExcelFile', formData)
            .then(response => {
                this.setState(prevState => ({
                    ...prevState,
                    panaromaForm: {
                        ...prevState.panaromaForm,
                        attachment: {
                            ...prevState.panaromaForm.attachment,
                            files: null
                        }
                    }
                }));
                alert(response.data);
            })
            .catch(err => {
                console.log(err);
            });
        }
        else if (arg === "sutas") {
            console.log("sutas")
            axios.put('/panaroma/SendSutasExcelFile', formData)
            .then(response => {
                this.setState(prevState => ({
                    ...prevState,
                    panaromaForm: {
                        ...prevState.panaromaForm,
                        attachment: {
                            ...prevState.panaromaForm.attachment,
                            files: null
                        }
                    }
                }));
                alert(response.data);
            })
            .catch(err => {
                console.log(err);
            });
        }
        

            event.preventDefault();
    }

    render() {
        let form = (
            <form>
                <DbButton 
                    disabled={!this.state.panaromaForm.attachment.files || this.state.panaromaForm.attachment.files.length === 0}
                    click={(event) => this.onSubmit("pansutas", event)}>MSD Rut Tanımlama</DbButton>
                <DbButton 
                    disabled={!this.state.panaromaForm.attachment.files || this.state.panaromaForm.attachment.files.length === 0}
                    click={(event) => this.onSubmit("sutas", event)}>ESY Rut Tanımlama</DbButton>
            </form>
        )

        return (
            <div className={classes.panaroma}>
                <div className={classes.panaroma__section_about}>
                    <div key="1" className={classes.u_center_text}>
                        <h2 className={classes.heading_secondary}>
                            Panorama Uygulaması
                        </h2>
                    </div>
                </div>
                <div className={classes.panaroma__item__1}>
                    <Input
                        inputConfig={
                            this.state.panaromaForm["attachment"]
                        }
                        inputChanged={event =>
                            this.inputChangedHandler(
                                event,
                                "attachment"
                            )
                        }
                        onCancel={this.onFileCancel}
                    />
                </div>
                <div className={classes.panaroma__item__2}>
                    {form}
                </div>
            </div>
        );
    }
}

export default panaroma;