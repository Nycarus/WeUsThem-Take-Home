"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/app/components/ContactTable.tsx":
/*!*********************************************!*\
  !*** ./src/app/components/ContactTable.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ContactRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContactRow */ \"(app-client)/./src/app/components/ContactRow.tsx\");\n/* harmony import */ var _ContactForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContactForm */ \"(app-client)/./src/app/components/ContactForm.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst ContactTable = ()=>{\n    _s();\n    const [contactData, setContactData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedIndex, setSelectedIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);\n    const [displayForm, setDisplayForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [sorting, setSorting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        fName: false,\n        lName: false,\n        email: false,\n        phone: false\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchUserData();\n    }, []);\n    const fetchUserData = async ()=>{\n        //await fetch api\n        let res = await fetch(\"http://localhost:5000/api/contact\", {\n            method: \"GET\",\n            mode: \"cors\",\n            cache: \"no-cache\",\n            credentials: \"same-origin\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        //let res = localStorage.getItem(\"@contact-data\");\n        let json = [];\n        if (res != null) json = await res.json();\n        setContactData(json.result);\n    };\n    const deleteUserData = async (id)=>{\n        //await delete api\n        //let temp = contactData.filter((el) => el.id !== id);\n        //localStorage.setItem(\"@contact-data\", JSON.stringify(temp));\n        let res = await fetch(\"http://localhost:5000/api/contact\", {\n            method: \"DELETE\",\n            mode: \"cors\",\n            cache: \"no-cache\",\n            credentials: \"same-origin\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                id: id\n            })\n        });\n        fetchUserData();\n    };\n    const updateUserData = async (contact)=>{\n        if (selectedIndex != -1) {\n            //await update api\n            let res = await fetch(\"http://localhost:5000/api/contact\", {\n                method: \"PATCH\",\n                mode: \"cors\",\n                cache: \"no-cache\",\n                credentials: \"same-origin\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(contact)\n            });\n            if (res.status === 200) {\n                let temp = contactData;\n                temp[selectedIndex] = contact;\n            }\n        //localStorage.setItem(\"@contact-data\", JSON.stringify(temp));\n        } else {\n            //await add api\n            let res = await fetch(\"http://localhost:5000/api/contact\", {\n                method: \"POST\",\n                mode: \"cors\",\n                cache: \"no-cache\",\n                credentials: \"same-origin\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(contact)\n            });\n            let temp = contactData;\n            temp.push(contact);\n        //localStorage.setItem(\"@contact-data\", JSON.stringify(temp));\n        }\n        fetchUserData();\n        closeFormModal();\n    };\n    const closeFormModal = ()=>{\n        setDisplayForm(false);\n        setSelectedIndex(-1);\n    };\n    const handleSortFName = ()=>{\n        let data = contactData;\n        if (sorting.fName) {\n            data.sort((a, b)=>a.fName.toLowerCase() > b.fName.toLowerCase() ? 1 : a.fName.toLowerCase() < b.fName.toLowerCase() ? -1 : 0);\n        } else {\n            data.sort((a, b)=>a.fName.toLowerCase() > b.fName.toLowerCase() ? -1 : a.fName.toLowerCase() < b.fName.toLowerCase() ? 1 : 0);\n        }\n        setContactData(data);\n        setSorting({\n            ...sorting,\n            fName: !sorting.fName\n        });\n    };\n    const handleSortLName = ()=>{\n        let data = contactData;\n        if (sorting.lName) {\n            data.sort((a, b)=>a.lName.toLowerCase() > b.lName.toLowerCase() ? 1 : a.lName.toLowerCase() < b.lName.toLowerCase() ? -1 : 0);\n        } else {\n            data.sort((a, b)=>a.lName.toLowerCase() > b.lName.toLowerCase() ? -1 : a.lName.toLowerCase() < b.lName.toLowerCase() ? 1 : 0);\n        }\n        setContactData(data);\n        setSorting({\n            ...sorting,\n            lName: !sorting.lName\n        });\n    };\n    const handleSortEmail = ()=>{\n        let data = contactData;\n        if (sorting.email) {\n            data.sort((a, b)=>a.email.toLowerCase() > b.email.toLowerCase() ? 1 : a.email.toLowerCase() < b.email.toLowerCase() ? -1 : 0);\n        } else {\n            data.sort((a, b)=>a.email.toLowerCase() > b.email.toLowerCase() ? -1 : a.email.toLowerCase() < b.email.toLowerCase() ? 1 : 0);\n        }\n        setContactData(data);\n        setSorting({\n            ...sorting,\n            email: !sorting.email\n        });\n    };\n    const handleSortPhone = ()=>{\n        let data = contactData;\n        if (sorting.phone) {\n            data.sort((a, b)=>a.phone > b.phone ? 1 : a.phone < b.phone ? -1 : 0);\n        } else {\n            data.sort((a, b)=>a.phone > b.phone ? -1 : a.phone < b.phone ? 1 : 0);\n        }\n        setContactData(data);\n        setSorting({\n            ...sorting,\n            phone: !sorting.phone\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"table\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            className: \"contact-row\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"image\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\reape\\\\Desktop\\\\Project\\\\weusthem-takehome\\\\wut-test-react-next\\\\src\\\\app\\\\components\\\\ContactTable.tsx\",\n                                    lineNumber: 158,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        onClick: ()=>handleSortFName(),\n                                        children: \"First Name\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\reape\\\\Desktop\\\\Project\\\\weusthem-takehome\\\\wut-test-react-next\\\\src\\\\app\\\\components\\\\ContactTable.tsx\",\n                                        lineNumber: 159,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\reape\\\\Desktop\\\\Project\\\\weusthem-takehome\\\\wut-test-react-next\\\\src\\\\app\\\\components\\\\ContactTable.tsx\",\n                                    lineNumber: 159,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        onClick: ()=>handleSortLName(),\n                                        children: \"Last Name\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\reape\\\\Desktop\\\\Project\\\\weusthem-takehome\\\\wut-test-react-next\\\\src\\\\app\\\\components\\\\ContactTable.tsx\",\n                                        lineNumber: 160,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\reape\\\\Desktop\\\\Project\\\\weusthem-takehome\\\\wut-test-react-next\\\\src\\\\app\\\\components\\\\ContactTable.tsx\",\n                                    lineNumber: 160,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        onClick: ()=>handleSortEmail(),\n                                        children: \"Email\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\reape\\\\Desktop\\\\Project\\\\weusthem-takehome\\\\wut-test-react-next\\\\src\\\\app\\\\components\\\\ContactTable.tsx\",\n                                        lineNumber: 161,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\reape\\\\Desktop\\\\Project\\\\weusthem-takehome\\\\wut-test-react-next\\\\src\\\\app\\\\components\\\\ContactTable.tsx\",\n                                    lineNumber: 161,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        onClick: ()=>handleSortPhone(),\n                                        children: \"Phone #\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\reape\\\\Desktop\\\\Project\\\\weusthem-takehome\\\\wut-test-react-next\\\\src\\\\app\\\\components\\\\ContactTable.tsx\",\n                                        lineNumber: 162,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\reape\\\\Desktop\\\\Project\\\\weusthem-takehome\\\\wut-test-react-next\\\\src\\\\app\\\\components\\\\ContactTable.tsx\",\n                                    lineNumber: 162,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"options\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\reape\\\\Desktop\\\\Project\\\\weusthem-takehome\\\\wut-test-react-next\\\\src\\\\app\\\\components\\\\ContactTable.tsx\",\n                                    lineNumber: 163,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\reape\\\\Desktop\\\\Project\\\\weusthem-takehome\\\\wut-test-react-next\\\\src\\\\app\\\\components\\\\ContactTable.tsx\",\n                            lineNumber: 157,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reape\\\\Desktop\\\\Project\\\\weusthem-takehome\\\\wut-test-react-next\\\\src\\\\app\\\\components\\\\ContactTable.tsx\",\n                        lineNumber: 156,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: contactData.map((contact, index)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ContactRow__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                data: contact,\n                                onDeleteData: ()=>deleteUserData(contact.id),\n                                onUpdateData: ()=>{\n                                    setSelectedIndex(index);\n                                    setDisplayForm(true);\n                                }\n                            }, contact.id, false, {\n                                fileName: \"C:\\\\Users\\\\reape\\\\Desktop\\\\Project\\\\weusthem-takehome\\\\wut-test-react-next\\\\src\\\\app\\\\components\\\\ContactTable.tsx\",\n                                lineNumber: 169,\n                                columnNumber: 15\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reape\\\\Desktop\\\\Project\\\\weusthem-takehome\\\\wut-test-react-next\\\\src\\\\app\\\\components\\\\ContactTable.tsx\",\n                        lineNumber: 166,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\reape\\\\Desktop\\\\Project\\\\weusthem-takehome\\\\wut-test-react-next\\\\src\\\\app\\\\components\\\\ContactTable.tsx\",\n                lineNumber: 155,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"btn btn-primary\",\n                    onClick: ()=>{\n                        setDisplayForm(true);\n                    },\n                    children: \"Add New\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\reape\\\\Desktop\\\\Project\\\\weusthem-takehome\\\\wut-test-react-next\\\\src\\\\app\\\\components\\\\ContactTable.tsx\",\n                    lineNumber: 183,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\reape\\\\Desktop\\\\Project\\\\weusthem-takehome\\\\wut-test-react-next\\\\src\\\\app\\\\components\\\\ContactTable.tsx\",\n                lineNumber: 182,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ContactForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                visible: displayForm,\n                selectedIndex: selectedIndex,\n                contactData: contactData,\n                onUpdateData: updateUserData,\n                onCloseModal: closeFormModal\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\reape\\\\Desktop\\\\Project\\\\weusthem-takehome\\\\wut-test-react-next\\\\src\\\\app\\\\components\\\\ContactTable.tsx\",\n                lineNumber: 192,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(ContactTable, \"Zh+HwoD6R+cVr6zFTDmfPsv0PBs=\");\n_c = ContactTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactTable);\nvar _c;\n$RefreshReg$(_c, \"ContactTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9jb21wb25lbnRzL0NvbnRhY3RUYWJsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDNEM7QUFDTjtBQUNFO0FBRXhDLE1BQU1JLGVBQWU7O0lBQ25CLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTCwrQ0FBUUEsQ0FBWSxFQUFFO0lBQzVELE1BQU0sQ0FBQ00sZUFBZUMsaUJBQWlCLEdBQUdQLCtDQUFRQSxDQUFDLENBQUM7SUFDcEQsTUFBTSxDQUFDUSxhQUFhQyxlQUFlLEdBQUdULCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBQztRQUNyQ1ksT0FBTztRQUNQQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsT0FBTztJQUNUO0lBRUFoQixnREFBU0EsQ0FBQztRQUNSaUI7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNQSxnQkFBZ0I7UUFDcEIsaUJBQWlCO1FBQ2pCLElBQUlDLE1BQU0sTUFBTUMsTUFBTSxxQ0FBcUM7WUFDekRDLFFBQU87WUFDUEMsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLGFBQWE7WUFDYkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFFbEI7UUFDRjtRQUNBLGtEQUFrRDtRQUNsRCxJQUFJQyxPQUFPLEVBQUU7UUFDYixJQUFJUCxPQUFPLE1BQU1PLE9BQU8sTUFBTVAsSUFBSU8sSUFBSTtRQUN0Q25CLGVBQWVtQixLQUFLQyxNQUFNO0lBQzVCO0lBRUEsTUFBTUMsaUJBQWlCLE9BQU9DO1FBQzVCLGtCQUFrQjtRQUNsQixzREFBc0Q7UUFDdEQsOERBQThEO1FBQzlELElBQUlWLE1BQU0sTUFBTUMsTUFBTSxxQ0FBcUM7WUFDekRDLFFBQU87WUFDUEMsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLGFBQWE7WUFDYkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFFbEI7WUFDQUssTUFBS0MsS0FBS0MsU0FBUyxDQUFDO2dCQUNsQkgsSUFBR0E7WUFDTDtRQUFFO1FBQ0pY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QUNKLDhEQUFDQTs4Q0FBRyw0RUFBQ0M7d0NBQU9DLE1BQUs7d0NBQVNDLFNBQVMsSUFBSWhCO2tEQUFtQjs7Ozs7Ozs7Ozs7OENBQzFELDhEQUFDYTs4Q0FBRyw0RUFBQ0M7d0NBQU9DLE1BQUs7d0NBQVNDLFNBQVMsSUFBSVY7a0RBQW1COzs7Ozs7Ozs7Ozs4Q0FDMUQsOERBQUNPOzhDQUFHLDRFQUFDQzt3Q0FBT0MsTUFBSzt3Q0FBU0MsU0FBUyxJQUFJVDtrREFBbUI7Ozs7Ozs7Ozs7OzhDQUMxRCw4REFBQ007OENBQUcsNEVBQUNDO3dDQUFPQyxNQUFLO3dDQUFTQyxTQUFTLElBQUlSO2tEQUFtQjs7Ozs7Ozs7Ozs7OENBQzFELDhEQUFDSzs4Q0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR1IsOERBQUNJO2tDQUNFbEQsWUFBWW1ELEdBQUcsQ0FBQyxDQUFDdkIsU0FBU3dCOzRCQUN6QixxQkFDRSw4REFBQ3ZELG1EQUFVQTtnQ0FFVHFDLE1BQU1OO2dDQUNOeUIsY0FBYyxJQUFNL0IsZUFBZU0sUUFBUUwsRUFBRTtnQ0FDN0MrQixjQUFjO29DQUNabkQsaUJBQWlCaUQ7b0NBQ2pCL0MsZUFBZTtnQ0FDakI7K0JBTkt1QixRQUFRTCxFQUFFOzs7Ozt3QkFTckI7Ozs7Ozs7Ozs7OzswQkFHSiw4REFBQ2dDOzBCQUNDLDRFQUFDUjtvQkFDQ0osV0FBVTtvQkFDVk0sU0FBUzt3QkFDUDVDLGVBQWU7b0JBQ2pCOzhCQUNEOzs7Ozs7Ozs7OzswQkFJSCw4REFBQ1Asb0RBQVdBO2dCQUNWMEQsU0FBU3BEO2dCQUNURixlQUFlQTtnQkFDZkYsYUFBYUE7Z0JBQ2JzRCxjQUFjM0I7Z0JBQ2Q4QixjQUFjekI7Ozs7Ozs7O0FBSXRCO0dBbk1NakM7S0FBQUE7QUFxTU4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0NvbnRhY3RUYWJsZS50c3g/NGRmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb250YWN0Um93IGZyb20gXCIuL0NvbnRhY3RSb3dcIjtcbmltcG9ydCBDb250YWN0Rm9ybSBmcm9tIFwiLi9Db250YWN0Rm9ybVwiO1xuXG5jb25zdCBDb250YWN0VGFibGUgPSAoKSA9PiB7XG4gIGNvbnN0IFtjb250YWN0RGF0YSwgc2V0Q29udGFjdERhdGFdID0gdXNlU3RhdGU8Q29udGFjdFtdPihbXSk7XG4gIGNvbnN0IFtzZWxlY3RlZEluZGV4LCBzZXRTZWxlY3RlZEluZGV4XSA9IHVzZVN0YXRlKC0xKTtcbiAgY29uc3QgW2Rpc3BsYXlGb3JtLCBzZXREaXNwbGF5Rm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzb3J0aW5nLCBzZXRTb3J0aW5nXSA9IHVzZVN0YXRlKHtcbiAgICBmTmFtZTogZmFsc2UsXG4gICAgbE5hbWU6IGZhbHNlLFxuICAgIGVtYWlsOiBmYWxzZSxcbiAgICBwaG9uZTogZmFsc2VcbiAgfSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoVXNlckRhdGEoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGZldGNoVXNlckRhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgLy9hd2FpdCBmZXRjaCBhcGlcbiAgICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvY29udGFjdCcsIHtcbiAgICAgIG1ldGhvZDpcIkdFVFwiLFxuICAgICAgbW9kZTogXCJjb3JzXCIsIC8vIG5vLWNvcnMsICpjb3JzLCBzYW1lLW9yaWdpblxuICAgICAgY2FjaGU6IFwibm8tY2FjaGVcIiwgLy8gKmRlZmF1bHQsIG5vLWNhY2hlLCByZWxvYWQsIGZvcmNlLWNhY2hlLCBvbmx5LWlmLWNhY2hlZFxuICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIiwgLy8gaW5jbHVkZSwgKnNhbWUtb3JpZ2luLCBvbWl0XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAvLyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICB9LFxuICAgIH0pXG4gICAgLy9sZXQgcmVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJAY29udGFjdC1kYXRhXCIpO1xuICAgIGxldCBqc29uID0gW107XG4gICAgaWYgKHJlcyAhPSBudWxsKSBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBzZXRDb250YWN0RGF0YShqc29uLnJlc3VsdCk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVXNlckRhdGEgPSBhc3luYyAoaWQ6IHN0cmluZykgPT4ge1xuICAgIC8vYXdhaXQgZGVsZXRlIGFwaVxuICAgIC8vbGV0IHRlbXAgPSBjb250YWN0RGF0YS5maWx0ZXIoKGVsKSA9PiBlbC5pZCAhPT0gaWQpO1xuICAgIC8vbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJAY29udGFjdC1kYXRhXCIsIEpTT04uc3RyaW5naWZ5KHRlbXApKTtcbiAgICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvY29udGFjdCcsIHtcbiAgICAgIG1ldGhvZDpcIkRFTEVURVwiLFxuICAgICAgbW9kZTogXCJjb3JzXCIsIC8vIG5vLWNvcnMsICpjb3JzLCBzYW1lLW9yaWdpblxuICAgICAgY2FjaGU6IFwibm8tY2FjaGVcIiwgLy8gKmRlZmF1bHQsIG5vLWNhY2hlLCByZWxvYWQsIGZvcmNlLWNhY2hlLCBvbmx5LWlmLWNhY2hlZFxuICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIiwgLy8gaW5jbHVkZSwgKnNhbWUtb3JpZ2luLCBvbWl0XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAvLyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICB9LFxuICAgICAgYm9keTpKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGlkOmlkXG4gICAgICB9KX0pXG4gICAgZmV0Y2hVc2VyRGF0YSgpXG4gIH07XG5cbiAgY29uc3QgdXBkYXRlVXNlckRhdGEgPSBhc3luYyAoY29udGFjdDogQ29udGFjdCkgPT4ge1xuICAgIGlmIChzZWxlY3RlZEluZGV4ICE9IC0xKSB7XG4gICAgICAvL2F3YWl0IHVwZGF0ZSBhcGlcbiAgICAgIGxldCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9jb250YWN0Jywge1xuICAgICAgICBtZXRob2Q6XCJQQVRDSFwiLFxuICAgICAgICBtb2RlOiBcImNvcnNcIiwgLy8gbm8tY29ycywgKmNvcnMsIHNhbWUtb3JpZ2luXG4gICAgICAgIGNhY2hlOiBcIm5vLWNhY2hlXCIsIC8vICpkZWZhdWx0LCBuby1jYWNoZSwgcmVsb2FkLCBmb3JjZS1jYWNoZSwgb25seS1pZi1jYWNoZWRcbiAgICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIiwgLy8gaW5jbHVkZSwgKnNhbWUtb3JpZ2luLCBvbWl0XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAvLyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoY29udGFjdCl9KVxuXG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKXtcbiAgICAgICAgXG4gICAgICAgIGxldCB0ZW1wID0gY29udGFjdERhdGE7XG4gICAgICAgIHRlbXBbc2VsZWN0ZWRJbmRleF0gPSBjb250YWN0O1xuICAgICAgfVxuICAgICAgLy9sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkBjb250YWN0LWRhdGFcIiwgSlNPTi5zdHJpbmdpZnkodGVtcCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvL2F3YWl0IGFkZCBhcGlcbiAgICAgIGxldCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9jb250YWN0Jywge1xuICAgICAgICBtZXRob2Q6XCJQT1NUXCIsXG4gICAgICAgIG1vZGU6IFwiY29yc1wiLCAvLyBuby1jb3JzLCAqY29ycywgc2FtZS1vcmlnaW5cbiAgICAgICAgY2FjaGU6IFwibm8tY2FjaGVcIiwgLy8gKmRlZmF1bHQsIG5vLWNhY2hlLCByZWxvYWQsIGZvcmNlLWNhY2hlLCBvbmx5LWlmLWNhY2hlZFxuICAgICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiLCAvLyBpbmNsdWRlLCAqc2FtZS1vcmlnaW4sIG9taXRcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIC8vICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeShjb250YWN0KX0pXG5cbiAgICAgIGxldCB0ZW1wID0gY29udGFjdERhdGE7XG4gICAgICB0ZW1wLnB1c2goY29udGFjdCk7XG4gICAgICAvL2xvY2FsU3RvcmFnZS5zZXRJdGVtKFwiQGNvbnRhY3QtZGF0YVwiLCBKU09OLnN0cmluZ2lmeSh0ZW1wKSk7XG4gICAgfVxuICAgIGZldGNoVXNlckRhdGEoKVxuICAgIGNsb3NlRm9ybU1vZGFsKCk7XG4gIH07XG5cbiAgY29uc3QgY2xvc2VGb3JtTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0RGlzcGxheUZvcm0oZmFsc2UpO1xuICAgIHNldFNlbGVjdGVkSW5kZXgoLTEpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNvcnRGTmFtZSA9ICgpID0+IHtcbiAgICBsZXQgZGF0YSA9IGNvbnRhY3REYXRhXG4gICAgaWYgKHNvcnRpbmcuZk5hbWUpe1xuICAgICAgZGF0YS5zb3J0KChhLGIpPT5hLmZOYW1lLnRvTG93ZXJDYXNlKCkgPiBiLmZOYW1lLnRvTG93ZXJDYXNlKCkgPyAxIDogYS5mTmFtZS50b0xvd2VyQ2FzZSgpIDwgYi5mTmFtZS50b0xvd2VyQ2FzZSgpID8gLTEgOiAwKVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgZGF0YS5zb3J0KChhLGIpPT5hLmZOYW1lLnRvTG93ZXJDYXNlKCkgPiBiLmZOYW1lLnRvTG93ZXJDYXNlKCkgPyAtMSA6IGEuZk5hbWUudG9Mb3dlckNhc2UoKSA8IGIuZk5hbWUudG9Mb3dlckNhc2UoKSA/IDEgOiAwKVxuICAgIH1cbiAgICBzZXRDb250YWN0RGF0YShkYXRhKVxuICAgIHNldFNvcnRpbmcoey4uLnNvcnRpbmcsIGZOYW1lOiFzb3J0aW5nLmZOYW1lfSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVNvcnRMTmFtZSA9ICgpID0+IHtcbiAgICBsZXQgZGF0YSA9IGNvbnRhY3REYXRhXG4gICAgaWYgKHNvcnRpbmcubE5hbWUpe1xuICAgICAgZGF0YS5zb3J0KChhLGIpPT5hLmxOYW1lLnRvTG93ZXJDYXNlKCkgPiBiLmxOYW1lLnRvTG93ZXJDYXNlKCkgPyAxIDogYS5sTmFtZS50b0xvd2VyQ2FzZSgpIDwgYi5sTmFtZS50b0xvd2VyQ2FzZSgpID8gLTEgOiAwKVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgZGF0YS5zb3J0KChhLGIpPT5hLmxOYW1lLnRvTG93ZXJDYXNlKCkgPiBiLmxOYW1lLnRvTG93ZXJDYXNlKCkgPyAtMSA6IGEubE5hbWUudG9Mb3dlckNhc2UoKSA8IGIubE5hbWUudG9Mb3dlckNhc2UoKSA/IDEgOiAwKVxuICAgIH1cblxuICAgIHNldENvbnRhY3REYXRhKGRhdGEpXG4gICAgc2V0U29ydGluZyh7Li4uc29ydGluZywgbE5hbWU6IXNvcnRpbmcubE5hbWV9KVxuICB9XG5cbiAgY29uc3QgaGFuZGxlU29ydEVtYWlsID0gKCkgPT4ge1xuICAgIGxldCBkYXRhID0gY29udGFjdERhdGFcbiAgICBpZiAoc29ydGluZy5lbWFpbCl7XG4gICAgICBkYXRhLnNvcnQoKGEsYik9PmEuZW1haWwudG9Mb3dlckNhc2UoKSA+IGIuZW1haWwudG9Mb3dlckNhc2UoKSA/IDEgOiBhLmVtYWlsLnRvTG93ZXJDYXNlKCkgPCBiLmVtYWlsLnRvTG93ZXJDYXNlKCkgPyAtMSA6IDApXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICBkYXRhLnNvcnQoKGEsYik9PmEuZW1haWwudG9Mb3dlckNhc2UoKSA+IGIuZW1haWwudG9Mb3dlckNhc2UoKSA/IC0xIDogYS5lbWFpbC50b0xvd2VyQ2FzZSgpIDwgYi5lbWFpbC50b0xvd2VyQ2FzZSgpID8gMSA6IDApXG4gICAgfVxuICAgIHNldENvbnRhY3REYXRhKGRhdGEpXG4gICAgc2V0U29ydGluZyh7Li4uc29ydGluZywgZW1haWw6IXNvcnRpbmcuZW1haWx9KVxuICB9XG5cbiAgY29uc3QgaGFuZGxlU29ydFBob25lID0gKCkgPT4ge1xuICAgIGxldCBkYXRhID0gY29udGFjdERhdGFcbiAgICBpZiAoc29ydGluZy5waG9uZSl7XG4gICAgICBkYXRhLnNvcnQoKGEsYik9PmEucGhvbmUgPiBiLnBob25lID8gMSA6IGEucGhvbmUgPCBiLnBob25lID8gLTEgOiAwKVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgZGF0YS5zb3J0KChhLGIpPT5hLnBob25lID4gYi5waG9uZSA/IC0xIDogYS5waG9uZSA8IGIucGhvbmUgPyAxIDogMClcbiAgICB9XG4gICAgc2V0Q29udGFjdERhdGEoZGF0YSlcbiAgICBzZXRTb3J0aW5nKHsuLi5zb3J0aW5nLCBwaG9uZTohc29ydGluZy5waG9uZX0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJjb250YWN0LXJvd1wiPlxuICAgICAgICAgICAgPHRoPmltYWdlPC90aD5cbiAgICAgICAgICAgIDx0aD48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKT0+aGFuZGxlU29ydEZOYW1lKCl9PkZpcnN0IE5hbWU8L2J1dHRvbj48L3RoPlxuICAgICAgICAgICAgPHRoPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpPT5oYW5kbGVTb3J0TE5hbWUoKX0+TGFzdCBOYW1lPC9idXR0b24+PC90aD5cbiAgICAgICAgICAgIDx0aD48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKT0+aGFuZGxlU29ydEVtYWlsKCl9PkVtYWlsPC9idXR0b24+PC90aD5cbiAgICAgICAgICAgIDx0aD48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKT0+aGFuZGxlU29ydFBob25lKCl9PlBob25lICM8L2J1dHRvbj48L3RoPlxuICAgICAgICAgICAgPHRoPm9wdGlvbnM8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7Y29udGFjdERhdGEubWFwKChjb250YWN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPENvbnRhY3RSb3dcbiAgICAgICAgICAgICAgICBrZXk9e2NvbnRhY3QuaWR9XG4gICAgICAgICAgICAgICAgZGF0YT17Y29udGFjdH1cbiAgICAgICAgICAgICAgICBvbkRlbGV0ZURhdGE9eygpID0+IGRlbGV0ZVVzZXJEYXRhKGNvbnRhY3QuaWQpfVxuICAgICAgICAgICAgICAgIG9uVXBkYXRlRGF0YT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRJbmRleChpbmRleCk7XG4gICAgICAgICAgICAgICAgICBzZXREaXNwbGF5Rm9ybSh0cnVlKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXREaXNwbGF5Rm9ybSh0cnVlKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgQWRkIE5ld1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPENvbnRhY3RGb3JtXG4gICAgICAgIHZpc2libGU9e2Rpc3BsYXlGb3JtfVxuICAgICAgICBzZWxlY3RlZEluZGV4PXtzZWxlY3RlZEluZGV4fVxuICAgICAgICBjb250YWN0RGF0YT17Y29udGFjdERhdGF9XG4gICAgICAgIG9uVXBkYXRlRGF0YT17dXBkYXRlVXNlckRhdGF9XG4gICAgICAgIG9uQ2xvc2VNb2RhbD17Y2xvc2VGb3JtTW9kYWx9XG4gICAgICA+PC9Db250YWN0Rm9ybT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RUYWJsZTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvbnRhY3RSb3ciLCJDb250YWN0Rm9ybSIsIkNvbnRhY3RUYWJsZSIsImNvbnRhY3REYXRhIiwic2V0Q29udGFjdERhdGEiLCJzZWxlY3RlZEluZGV4Iiwic2V0U2VsZWN0ZWRJbmRleCIsImRpc3BsYXlGb3JtIiwic2V0RGlzcGxheUZvcm0iLCJzb3J0aW5nIiwic2V0U29ydGluZyIsImZOYW1lIiwibE5hbWUiLCJlbWFpbCIsInBob25lIiwiZmV0Y2hVc2VyRGF0YSIsInJlcyIsImZldGNoIiwibWV0aG9kIiwibW9kZSIsImNhY2hlIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwianNvbiIsInJlc3VsdCIsImRlbGV0ZVVzZXJEYXRhIiwiaWQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInVwZGF0ZVVzZXJEYXRhIiwiY29udGFjdCIsInN0YXR1cyIsInRlbXAiLCJwdXNoIiwiY2xvc2VGb3JtTW9kYWwiLCJoYW5kbGVTb3J0Rk5hbWUiLCJkYXRhIiwic29ydCIsImEiLCJiIiwidG9Mb3dlckNhc2UiLCJoYW5kbGVTb3J0TE5hbWUiLCJoYW5kbGVTb3J0RW1haWwiLCJoYW5kbGVTb3J0UGhvbmUiLCJ0YWJsZSIsImNsYXNzTmFtZSIsInRoZWFkIiwidHIiLCJ0aCIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIiwidGJvZHkiLCJtYXAiLCJpbmRleCIsIm9uRGVsZXRlRGF0YSIsIm9uVXBkYXRlRGF0YSIsImRpdiIsInZpc2libGUiLCJvbkNsb3NlTW9kYWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/app/components/ContactTable.tsx\n"));

/***/ })

});