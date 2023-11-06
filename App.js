/* <div id="parent">
    <div id="child">
        <h1>I m h1 tag</h1>
        <h2>I m h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I m h1 tag</h1>
        <h2>I m h2 tag</h2>
    </div>
</div> */






const structure = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child1" },
        [React.createElement("h1", {}, "I m h1 tag"),
        React.createElement("h2", {}, "I m h2 tag")
        ]
    ),
    React.createElement("div", { id: "child2" },
        [React.createElement("h1", {}, "I m h1 tag"),
        React.createElement("h2", {}, "I m h2 tag")
        ]
    )]
);



const heading = React.createElement('h1',
    { id: 'heading', xyz: 'abc' },
    'Hello world from React!');
const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(structure); // object

root.render(structure);