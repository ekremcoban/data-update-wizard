import React, { Fragment } from "react";
import uuid from 'uuid';

import classes from "./input.scss";

const input = props => {
    let inputElement = null;
    let validationMessage = null;
    const inputClasses = [];

    if (
        !props.inputConfig.isValid &&
        props.inputConfig.validation &&
        props.inputConfig.isTouched
    ) {
        inputClasses.push(classes.Invalid);
    }

    if (props.inputConfig.elementConfig.readOnly) {
        inputClasses.push(classes.ReadOnly);
    }
    if (props.inputConfig.elementConfig.visible === "false") {
        inputClasses.push(classes.Invisible);
    }

    if (
        props.inputConfig.validation &&
        props.inputConfig.validation.minLength
    ) {
        validationMessage = (
            <div className={classes.ValidationMessage}>
                * En az {props.inputConfig.validation.minLength} karakter giriş
                yapmalısınız !
            </div>
        );
    }

    switch (props.inputConfig.elementType) {
        case "input":
            inputClasses.push(classes.InputElement);
            inputElement = (
                <Fragment>
                    {validationMessage}
                    <input
                        className={inputClasses.join(" ")}
                        {...props.inputConfig.elementConfig}
                        value={props.inputConfig.value}
                        onChange={props.inputChanged}
                    />
                </Fragment>
            );
            break;
        case "textarea":
            inputClasses.push(classes.InputElement);
            inputElement = (
                <Fragment>
                    {validationMessage}
                    <textarea
                        rows="10"
                        className={inputClasses.join(" ")}
                        {...props.inputConfig.elementConfig}
                        value={props.inputConfig.value}
                        onChange={props.inputChanged}
                    />
                </Fragment>
            );
            break;
        case "file":
            //inputClasses.push(classes.InputElement);
            let customInput = null;
            let selectedFiles = null;
            let fileRef = React.createRef();

            if (props.inputConfig.customInput) {
                const icon = require("../../assets/upload.png");
                const cancelIcon = require("../../assets/cross-white.png");
                
                const description =
                    !props.inputConfig.files ||
                    props.inputConfig.files.length === 0
                        ? "Dosya seçiniz..."
                        : props.inputConfig.files.length === 1
                        ? props.inputConfig.files[0].name
                        : "Lütfen 1 dosya seçiniz";
//`${props.inputConfig.files.length} dosya seçildi`
                // const cancelButton =
                //     props.inputConfig.files &&
                //     props.inputConfig.files.length > 0 ? (
                //         <img
                //             src={cancelIcon}
                //             onClick={props.onCancel}
                //             alt=""
                //             style={{
                //                 marginLeft: "15px",
                //                 height: "100%",
                //                 cursor: "pointer"
                //             }}
                //         />
                //     ) : null;

                selectedFiles = props.inputConfig.files ? props.inputConfig.files.map((file, index) => (
                    <div
                        key={uuid()}
                        style={{
                            width: "200px",
                            display: "flex",
                            flexDirection: "row",
                            backgroundColor: "#127548",
                            color: "white",
                            margin: "auto"
                        }}
                    >
                        <span
                            style={{
                                flex: 1,
                                width: "100%",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis"
                            }}
                        >
                            {file.name}
                        </span>
                        <img
                            src={cancelIcon}
                            onClick={() => props.onCancel(index)}
                            alt=""
                            style={{
                                marginLeft: "15px",
                                height: "24px",
                                cursor: "pointer"
                            }}
                        />
                    </div>
                )) : null;

                customInput = (
                    <div
                        style={{
                            minWidth: "200px",
                            height: "50px",
                            padding: "8px",
                            display: "inline-flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            boxSizing: "border-box",
                            backgroundColor: "#127548"
                        }}
                    >
                        <div
                            onClick={() => fileRef.current.click()}
                            style={{
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyItems: "start"
                            }}
                        >
                            <img
                                src={icon}
                                alt=""
                                style={{ marginRight: "15px" }}
                            />
                            <span
                                style={{
                                    color: "white",
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis"
                                }}
                            >
                                {description}
                            </span>
                        </div>
                        {/* {cancelButton} */}
                    </div>
                );
            }

            inputElement = (
                <Fragment>
                    <input
                        type="file"
                        ref={fileRef}
                        className={inputClasses.join(" ")}
                        {...props.inputConfig.elementConfig}
                        value={props.inputConfig.value}
                        onChange={props.inputChanged}
                    />
                    {customInput}
                    {selectedFiles}
                </Fragment>
            );
            break;
        case "checkbox":
            inputClasses.push(classes.CheckBoxElement);
            inputElement = (
                <input
                    type="checkbox"
                    className={inputClasses.join(" ")}
                    checked={props.inputConfig.value}
                    onChange={props.inputChanged}
                />
            );
            if (props.inputConfig.elementConfig.label) {
                inputElement = (
                    <label className={classes.CheckBoxLabel}>
                        {inputElement}
                        {props.inputConfig.elementConfig.label}
                    </label>
                );
            }
            break;
        default:
            inputClasses.push(classes.InputElement);
            inputElement = (
                <input
                    className={inputClasses.join(" ")}
                    {...props.inputConfig.elementConfig}
                    value={props.inputConfig.value}
                    onChange={props.inputChanged}
                />
            );
    }

    return (
        <div className={classes.Input}>
            {/* <label className={classes.Label}>{props.label}</label> */}
            {inputElement}
        </div>
    );
};

export default input;


// import React, { Fragment } from "react";
// import uuid from 'uuid';

// import classes from "./input.scss";

// const input = props => {
//     let inputElement = null;
//     let validationMessage = null;
//     const inputClasses = [];

//     if (
//         !props.inputConfig.isValid &&
//         props.inputConfig.validation &&
//         props.inputConfig.isTouched
//     ) {
//         inputClasses.push(classes.Invalid);
//     }

//     if (props.inputConfig.elementConfig.readOnly) {
//         inputClasses.push(classes.ReadOnly);
//     }
//     if (props.inputConfig.elementConfig.visible === "false") {
//         inputClasses.push(classes.Invisible);
//     }

//     if (
//         props.inputConfig.validation &&
//         props.inputConfig.validation.minLength
//     ) {
//         validationMessage = (
//             <div className={classes.ValidationMessage}>
//                 * En az {props.inputConfig.validation.minLength} karakter giriş
//                 yapmalısınız !
//             </div>
//         );
//     }

//     switch (props.inputConfig.elementType) {
//         case "input":
//             inputClasses.push(classes.InputElement);
//             inputElement = (
//                 <Fragment>
//                     {validationMessage}
//                     <input
//                         className={inputClasses.join(" ")}
//                         {...props.inputConfig.elementConfig}
//                         value={props.inputConfig.value}
//                         onChange={props.inputChanged}
//                     />
//                 </Fragment>
//             );
//             break;
//         case "textarea":
//             inputClasses.push(classes.InputElement);
//             inputElement = (
//                 <Fragment>
//                     {validationMessage}
//                     <textarea
//                         rows="10"
//                         className={inputClasses.join(" ")}
//                         {...props.inputConfig.elementConfig}
//                         value={props.inputConfig.value}
//                         onChange={props.inputChanged}
//                     />
//                 </Fragment>
//             );
//             break;
//         case "file":
//             //inputClasses.push(classes.InputElement);
//             let customInput = null;
//             let selectedFiles = null;
//             let fileRef = React.createRef();

//             if (props.inputConfig.customInput) {
//                 const icon = require("../../assets/upload.png");
//                 const cancelIcon = require("../../assets/cross-white.png");
                
//                 const description =
//                     !props.inputConfig.files ||
//                     props.inputConfig.files.length === 0
//                         ? "Dosya seçiniz..."
//                         : props.inputConfig.files.length === 1
//                         ? props.inputConfig.files[0].name
//                         : `${props.inputConfig.files.length} dosya seçildi`;

//                 // const cancelButton =
//                 //     props.inputConfig.files &&
//                 //     props.inputConfig.files.length > 0 ? (
//                 //         <img
//                 //             src={cancelIcon}
//                 //             onClick={props.onCancel}
//                 //             alt=""
//                 //             style={{
//                 //                 marginLeft: "15px",
//                 //                 height: "100%",
//                 //                 cursor: "pointer"
//                 //             }}
//                 //         />
//                 //     ) : null;

//                 selectedFiles = props.inputConfig.files ? props.inputConfig.files.map((file, index) => (
//                     <div
//                         key={uuid()}
//                         style={{
//                             width: "200px",
//                             display: "flex",
//                             flexDirection: "row",
//                             backgroundColor: "#127548",
//                             color: "white",
//                             margin: "5px 0 5px 0",
//                             padding: "5px"
//                         }}
//                     >
//                         <span
//                             style={{
//                                 flex: 1,
//                                 whiteSpace: "nowrap",
//                                 overflow: "hidden",
//                                 textOverflow: "ellipsis"
//                             }}
//                         >
//                             {file.name}
//                         </span>
//                         <img
//                             src={cancelIcon}
//                             onClick={() => props.onCancel(index)}
//                             alt=""
//                             style={{
//                                 marginLeft: "15px",
//                                 height: "24px",
//                                 cursor: "pointer"
//                             }}
//                         />
//                     </div>
//                 )) : null;

//                 customInput = (
//                     <div
//                         style={{
//                             minWidth: "200px",
//                             height: "50px",
//                             padding: "8px",
//                             display: "inline-flex",
//                             flexDirection: "row",
//                             alignItems: "center",
//                             justifyContent: "space-between",
//                             boxSizing: "border-box",
//                             backgroundColor: "#127548"
//                         }}
//                     >
//                         <div
//                             onClick={() => fileRef.current.click()}
//                             style={{
//                                 cursor: "pointer",
//                                 display: "flex",
//                                 alignItems: "center",
//                                 justifyItems: "start"
//                             }}
//                         >
//                             <img
//                                 src={icon}
//                                 alt=""
//                                 style={{ marginRight: "15px" }}
//                             />
//                             <span
//                                 style={{
//                                     color: "white",
//                                     whiteSpace: "nowrap",
//                                     overflow: "hidden",
//                                     textOverflow: "ellipsis"
//                                 }}
//                             >
//                                 {description}
//                             </span>
//                         </div>
//                         {/* {cancelButton} */}
//                     </div>
//                 );
//             }

//             inputElement = (
//                 <Fragment>
//                     <input
//                         type="file"
//                         ref={fileRef}
//                         className={inputClasses.join(" ")}
//                         {...props.inputConfig.elementConfig}
//                         value={props.inputConfig.value}
//                         onChange={props.inputChanged}
//                     />
//                     {customInput}
//                     {selectedFiles}
//                 </Fragment>
//             );
//             break;
//         case "checkbox":
//             inputClasses.push(classes.CheckBoxElement);
//             inputElement = (
//                 <input
//                     type="checkbox"
//                     className={inputClasses.join(" ")}
//                     checked={props.inputConfig.value}
//                     onChange={props.inputChanged}
//                 />
//             );
//             if (props.inputConfig.elementConfig.label) {
//                 inputElement = (
//                     <label className={classes.CheckBoxLabel}>
//                         {inputElement}
//                         {props.inputConfig.elementConfig.label}
//                     </label>
//                 );
//             }
//             break;
//         default:
//             inputClasses.push(classes.InputElement);
//             inputElement = (
//                 <input
//                     className={inputClasses.join(" ")}
//                     {...props.inputConfig.elementConfig}
//                     value={props.inputConfig.value}
//                     onChange={props.inputChanged}
//                 />
//             );
//     }

//     return (
//         <div className={classes.Input}>
//             {/* <label className={classes.Label}>{props.label}</label> */}
//             {inputElement}
//         </div>
//     );
// };

// export default input;
