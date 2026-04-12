const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "first js"),
        React.createElement("h1", {
            id: "2nd heading"
        }, "second  js")
    ]),
    React.createElement("div", {
        id: "2nd child"
    }, [
        React.createElement("h1", {
            id: "2nd heading"
        }, "first js"),
        React.createElement("h1", {
            id: "2nd heading"
        }, "first js")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);

//# sourceMappingURL=react02.7c0ccee6.js.map
