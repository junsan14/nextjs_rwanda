export default function TypeScriptSummary() {
  return (
    <>
      <style>{`
        .ts {
          padding: 20px;
          font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
          line-height: 1.6;
        }
        .ts__title {
          text-align: center;
          margin: 0 0 16px;
        }
        .ts__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 16px;
        }
        .ts__card {
          background: #f9f9fb;
          border-radius: 12px;
          padding: 16px;
          box-shadow: 0 6px 16px rgba(0,0,0,0.07);
        }
        .ts__card--intro { border-left: 6px solid #7c4dff; }
        .ts__card--setup { border-left: 6px solid #00acc1; }
        .ts__card--types { border-left: 6px solid #4caf50; }
        .ts__card--funcs { border-left: 6px solid #9c27b0; }
        .ts__card--tasks { border-left: 6px solid #ff9800; margin-top: 16px; }

        .ts__h3 { margin: 0 0 10px; }
        .ts__h4 { margin: 12px 0 8px; }
        .ts__list { padding-left: 18px; margin: 0 0 12px; }

        .ts__codeTitle {
          font-weight: 800;
          margin: 10px 0 6px;
          font-size: 0.95rem;
        }
        .ts__code {
          background: #111;
          color: #f1f1f1;
          padding: 12px;
          border-radius: 10px;
          overflow-x: auto;
          font-size: 0.9rem;
          margin: 0 0 10px;
        }

        .ts__note {
          margin-top: 10px;
          padding: 10px 12px;
          border-radius: 10px;
          background: #fff;
          border: 1px dashed #c9c9d6;
        }

        code {
          background: #eee;
          padding: 2px 6px;
          border-radius: 6px;
        }
      `}</style>

      <div className="ts">
        <h2 className="ts__title">TypeScript (Summary)</h2>

        <div className="ts__grid">
          {/* Intro */}
          <section className="ts__card ts__card--intro">
            <h3 className="ts__h3">🧠 What is TypeScript?</h3>
            <ul className="ts__list">
              <li>
                TypeScript is a <strong>syntactic superset</strong> of JavaScript
                that adds <strong>static typing</strong>.
              </li>
              <li>
                It adds type syntax on top of JavaScript so developers can write
                safer code.
              </li>
            </ul>

            <h4 className="ts__h4">Why use it?</h4>
            <ul className="ts__list">
              <li>JavaScript is loosely typed → types can be unclear.</li>
              <li>TypeScript can report errors when types don’t match.</li>
              <li>Helps readability: you can see expected types in the code.</li>
            </ul>

            <div className="ts__note">
              TypeScript adds types, but the final output is still JavaScript.
            </div>
          </section>

          {/* Compiler / Setup */}
          <section className="ts__card ts__card--setup">
            <h3 className="ts__h3">🛠️ TypeScript Compiler</h3>
            <ul className="ts__list">
              <li>
                TypeScript is converted (transpiled) into JavaScript using the{" "}
                <strong>TypeScript compiler</strong>.
              </li>
            </ul>

            <div className="ts__codeTitle">Install compiler</div>
            <pre className="ts__code">
{`npm install typescript --save-dev`}
            </pre>

            <div className="ts__codeTitle">Run compiler</div>
            <pre className="ts__code">
{`npx tsc`}
            </pre>

            <div className="ts__codeTitle">Create tsconfig.json</div>
            <pre className="ts__code">
{`npx tsc --init`}
            </pre>

            <div className="ts__note">
              <code>tsconfig.json</code> configures how TypeScript compiles your
              project.
            </div>
          </section>

          {/* Basic Types */}
          <section className="ts__card ts__card--types">
            <h3 className="ts__h3">📦 Basic Data Types</h3>
            <div className="ts__codeTitle">String / Number / Boolean</div>
            <pre className="ts__code">
{`let helloWorld: string = "Hello World";
let n: number = 44;
let isSunny: boolean = true;`}
            </pre>

            <div className="ts__codeTitle">Arrays</div>
            <pre className="ts__code">
{`const fruits: string[] = ["apple", "orange"];
const numbers: number[] = [10, 20, 30];`}
            </pre>

            <div className="ts__codeTitle">Objects (inline type)</div>
            <pre className="ts__code">
{`const car: { type: string; model: string; year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009,
};`}
            </pre>

            <div className="ts__codeTitle">Objects (interface)</div>
            <pre className="ts__code">
{`interface User {
  name: string;
  age: number;
}

const user: User = { name: "John", age: 20 };`}
            </pre>

            <div className="ts__note">
              An <strong>interface</strong> defines the “shape” of an object (a
              contract / blueprint).
            </div>
          </section>

          {/* Functions + Union */}
          <section className="ts__card ts__card--funcs">
            <h3 className="ts__h3">🔧 Functions & Union Types</h3>

            <div className="ts__codeTitle">Function return type</div>
            <pre className="ts__code">
{`function getTime(): number {
  return new Date().getTime();
}`}
            </pre>

            <div className="ts__codeTitle">void (no return)</div>
            <pre className="ts__code">
{`function printHello(): void {
  console.log("Hello!");
}`}
            </pre>

            <div className="ts__codeTitle">Union type (string OR number)</div>
            <pre className="ts__code">
{`function printStatusCode(code: string | number): void {
  console.log(\`My status code is \${code}.\`);
}`}
            </pre>

            <div className="ts__note">
              Union types are used when a value can be more than one type.
            </div>
          </section>
        </div>

        {/* Tasks */}
        <section className="ts__card ts__card--tasks">
          <h3 className="ts__h3">🧪 Practice Tasks (from the slides)</h3>
          <ul className="ts__list">
            <li>
              Create <code>greet.ts</code> to display <code>Hello, {"${name}"}!</code>,
              compile it, run it.
            </li>
            <li>
              Declare variables with correct types: <code>age</code> (number),
              <code>name</code> (string), <code>isStudent</code> (boolean).
            </li>
            <li>
              Add type annotations to: <code>function add(a, b)</code>.
            </li>
            <li>
              Create an array that stores only strings: <code>fruits</code>.
            </li>
            <li>
              Add a type for an object like: <code>{`{ name: "John", age: 20 }`}</code>.
            </li>
            <li>
              Make a function accept <code>number | string</code> (union):{" "}
              <code>printId(id)</code>.
            </li>
          </ul>

          <div className="ts__note">
            <strong>Quiz idea:</strong> “What does the TS compiler do?” → It
            converts TypeScript into JavaScript.
          </div>
        </section>
      </div>
    </>
  );
}
