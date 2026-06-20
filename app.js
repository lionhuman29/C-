/* ═══════════════════════════════════════════════════════
   C++ MASTERY — FULL APPLICATION JAVASCRIPT
   ═══════════════════════════════════════════════════════ */

'use strict';

/* ─────────────────── PROGRESS BAR ──────────────────── */
const progressBar = document.createElement('div');
progressBar.className = 'progress-bar';
document.body.prepend(progressBar);

window.addEventListener('scroll', () => {
  const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
  progressBar.style.width = pct + '%';
});

/* ─────────────────────── NAVBAR ─────────────────────── */
const navbar  = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  document.getElementById('backToTop').classList.toggle('visible', window.scrollY > 400);
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

/* ─────────────────────── BACK TO TOP ────────────────── */
document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ─────────────────── PARTICLES ─────────────────────── */
(function createParticles() {
  const container = document.getElementById('particles');
  for (let i = 0; i < 50; i++) {
    const p = document.createElement('div');
    const size = Math.random() * 3 + 1;
    Object.assign(p.style, {
      position: 'absolute',
      width: size + 'px', height: size + 'px',
      borderRadius: '50%',
      background: ['#4f8ef7','#8b5cf6','#22d3ee','#ec4899'][Math.floor(Math.random()*4)],
      left: Math.random() * 100 + '%',
      top:  Math.random() * 100 + '%',
      opacity: (Math.random() * 0.4 + 0.05).toFixed(2),
      animation: `blobFloat ${8 + Math.random()*12}s ease-in-out ${-Math.random()*12}s infinite alternate`
    });
    container.appendChild(p);
  }
})();

/* ────────────────── TYPEWRITER ──────────────────────── */
(function typewriter() {
  const words = ['Expert','System Programmer','Game Developer','Embedded Engineer','Performance Wizard'];
  let wi = 0, ci = 0, del = false;
  const el = document.getElementById('typewriter');
  function tick() {
    const word = words[wi];
    if (!del) {
      el.textContent = word.slice(0, ++ci);
      if (ci === word.length) { del = true; setTimeout(tick, 1800); return; }
    } else {
      el.textContent = word.slice(0, --ci);
      if (ci === 0) { del = false; wi = (wi + 1) % words.length; }
    }
    setTimeout(tick, del ? 60 : 90);
  }
  tick();
})();

/* ──────────────── HERO CODE ANIMATION ───────────────── */
(function heroCode() {
  const code = `<span class="tok-inc">#include</span> <span class="tok-str">&lt;iostream&gt;</span>
<span class="tok-inc">#include</span> <span class="tok-str">&lt;string&gt;</span>
<span class="tok-kw">using namespace</span> <span class="tok-ns">std</span><span class="tok-punct">;</span>

<span class="tok-cmt">// Your C++ journey starts here</span>
<span class="tok-kw">class</span> <span class="tok-fn">Developer</span> <span class="tok-punct">{</span>
  <span class="tok-kw">public</span><span class="tok-punct">:</span>
    string name<span class="tok-punct">;</span>
    string level<span class="tok-punct">;</span>

    <span class="tok-fn">Developer</span><span class="tok-punct">(</span>string n<span class="tok-punct">)</span> <span class="tok-punct">{</span>
      name  <span class="tok-op">=</span> n<span class="tok-punct">;</span>
      level <span class="tok-op">=</span> <span class="tok-str">"Beginner"</span><span class="tok-punct">;</span>
    <span class="tok-punct">}</span>

    <span class="tok-kw">void</span> <span class="tok-fn">learn</span><span class="tok-punct">() {</span>
      level <span class="tok-op">=</span> <span class="tok-str">"Advanced"</span><span class="tok-punct">;</span>
      cout <span class="tok-op">&lt;&lt;</span> name <span class="tok-op">&lt;&lt;</span> <span class="tok-str">" leveled up!"</span><span class="tok-punct">;</span>
    <span class="tok-punct">}</span>
<span class="tok-punct">};</span>

<span class="tok-kw">int</span> <span class="tok-fn">main</span><span class="tok-punct">() {</span>
  Developer dev<span class="tok-punct">(</span><span class="tok-str">"You"</span><span class="tok-punct">);</span>
  dev<span class="tok-punct">.</span><span class="tok-fn">learn</span><span class="tok-punct">();</span>
  <span class="tok-kw">return</span> <span class="tok-num">0</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>`;
  document.getElementById('heroCode').innerHTML = code;
})();

/* ──────────────── COUNTER ANIMATION ─────────────────── */
function animateCounters() {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = +el.dataset.target;
    const dur = 1800;
    const step = 16;
    const inc  = target / (dur / step);
    let cur = 0;
    const timer = setInterval(() => {
      cur = Math.min(cur + inc, target);
      el.textContent = Math.floor(cur);
      if (cur >= target) clearInterval(timer);
    }, step);
  });
}
let countersRan = false;
const heroObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting && !countersRan) {
    countersRan = true;
    animateCounters();
  }
}, { threshold: .4 });
heroObserver.observe(document.querySelector('.hero-stats'));

/* ──────────────── SCROLL ANIMATIONS ─────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const delay = e.target.dataset.delay || 0;
      setTimeout(() => e.target.classList.add('visible'), +delay);
    }
  });
}, { threshold: .1 });
document.querySelectorAll('.feature-card').forEach(el => revealObserver.observe(el));

/* ═══════════════════════════════════════════════════════
   DATA — CURRICULUM & LESSONS
   ═══════════════════════════════════════════════════════ */

const CURRICULUM = [
  {
    id: 'foundations',
    num: '01',
    title: 'C++ Foundations',
    desc: 'Your starting point. Learn the basic structure, syntax, and building blocks of C++.',
    level: 'beginner',
    lessons: 18,
    topics: ['Setup & Compilation','Hello World','Variables','Data Types','Constants','Operators','Input/Output']
  },
  {
    id: 'control-flow',
    num: '02',
    title: 'Control Flow',
    desc: 'Master conditional logic and loops to control program execution.',
    level: 'beginner',
    lessons: 14,
    topics: ['if/else','switch','for loops','while loops','do-while','break & continue','Nested Loops']
  },
  {
    id: 'functions',
    num: '03',
    title: 'Functions',
    desc: 'Write reusable, modular code with functions, parameters, and recursion.',
    level: 'beginner',
    lessons: 16,
    topics: ['Function Basics','Parameters','Return Values','Overloading','Default Args','Inline','Recursion']
  },
  {
    id: 'arrays-strings',
    num: '04',
    title: 'Arrays & Strings',
    desc: 'Store and manipulate collections of data efficiently.',
    level: 'beginner',
    lessons: 14,
    topics: ['1D Arrays','2D Arrays','C-strings','std::string','String Methods','Array Algorithms']
  },
  {
    id: 'pointers-memory',
    num: '05',
    title: 'Pointers & Memory',
    desc: 'Unlock C++\'s most powerful feature — direct memory manipulation.',
    level: 'intermediate',
    lessons: 20,
    topics: ['Pointer Basics','Address-of','Dereferencing','Pointer Arithmetic','new/delete','References','Smart Pointers']
  },
  {
    id: 'oop',
    num: '06',
    title: 'Object-Oriented Programming',
    desc: 'Model real-world entities with classes, inheritance, and polymorphism.',
    level: 'intermediate',
    lessons: 22,
    topics: ['Classes','Constructors','Destructors','Encapsulation','Inheritance','Polymorphism','Virtual Functions']
  },
  {
    id: 'stl',
    num: '07',
    title: 'Standard Template Library',
    desc: 'Leverage the powerful suite of containers, algorithms, and iterators.',
    level: 'intermediate',
    lessons: 18,
    topics: ['vector','list','map','set','stack','queue','Algorithms','Iterators','Lambdas']
  },
  {
    id: 'templates',
    num: '08',
    title: 'Templates & Generics',
    desc: 'Write generic code that works with any data type using templates.',
    level: 'intermediate',
    lessons: 14,
    topics: ['Function Templates','Class Templates','Template Specialization','Variadic Templates','SFINAE','Concepts']
  },
  {
    id: 'modern-cpp',
    num: '09',
    title: 'Modern C++ (C++11–23)',
    desc: 'Embrace modern C++ features that make code cleaner and more expressive.',
    level: 'advanced',
    lessons: 20,
    topics: ['auto','Range-for','Move Semantics','Rvalue Refs','constexpr','nullptr','Structured Bindings','Ranges']
  },
  {
    id: 'concurrency',
    num: '10',
    title: 'Concurrency & Threads',
    desc: 'Write multi-threaded programs that run tasks in parallel for maximum performance.',
    level: 'advanced',
    lessons: 16,
    topics: ['std::thread','Mutexes','Locks','Condition Variables','Futures','Promises','Atomic Types']
  },
  {
    id: 'file-io',
    num: '11',
    title: 'File I/O & Streams',
    desc: 'Read, write, and process files and data streams with confidence.',
    level: 'advanced',
    lessons: 10,
    topics: ['fstream','ifstream','ofstream','Binary Files','String Streams','Error Handling']
  },
  {
    id: 'advanced-topics',
    num: '12',
    title: 'Advanced Topics',
    desc: 'Go deep into the language: metaprogramming, design patterns, and optimization.',
    level: 'expert',
    lessons: 24,
    topics: ['TMP','CRTP','Design Patterns','Memory Model','Cache Optimization','Profiling','SIMD','CMake']
  }
];

/* ══════════════════════ LESSON CONTENT DATA ══════════════ */
const LESSONS = {
  // ── Module 1 ──────────────────────────────────────────
  'setup': {
    module: 'C++ Foundations',
    title: 'Setting Up C++',
    icon: '🔧',
    time: '10 min',
    content: `
      <h2>Setting Up Your C++ Development Environment</h2>
      <p>Before writing any code, you need a <strong>compiler</strong> — a program that translates your human-readable C++ into machine code that computers can execute.</p>
      <h3>Recommended Compilers</h3>
      <ul>
        <li><strong>GCC (g++)</strong> — Free, open-source, works on Linux/macOS/Windows (via MinGW)</li>
        <li><strong>Clang</strong> — Modern, excellent error messages, default on macOS</li>
        <li><strong>MSVC</strong> — Microsoft's compiler, comes with Visual Studio on Windows</li>
      </ul>
      <h3>Quick Start: Online Compilers</h3>
      <p>The fastest way to start — no installation needed! Use our <strong>Playground</strong> section above, or try:</p>
      <ul>
        <li><strong>Compiler Explorer</strong> (godbolt.org) — See your code as assembly</li>
        <li><strong>Wandbox</strong> — Multiple compilers, C++20 support</li>
      </ul>
      <div class="info-box">
        <strong>💡 Tip:</strong> For serious development, install VS Code with the C++ extension and g++. It gives you debugging, IntelliSense, and a great editing experience.
      </div>
      <h3>Your First Compilation</h3>
      <p>Once g++ is installed, compiling is simple:</p>
      <div class="code-block">
        <div class="code-block-header"><span class="code-block-lang">Shell</span><button class="code-block-copy">Copy</button></div>
        <pre><code><span class="tok-cmt"># Compile a C++ file</span>
g++ hello.cpp -o hello

<span class="tok-cmt"># Run the compiled program</span>
./hello

<span class="tok-cmt"># Compile with C++17 standard (recommended)</span>
g++ -std=c++17 -Wall hello.cpp -o hello</code></pre>
      </div>
      <div class="warn-box">
        <strong>⚠️ Important:</strong> Always compile with <code class="inline">-Wall</code> (all warnings) enabled. Warnings are your friend — they catch bugs before they become problems.
      </div>
    `
  },
  'hello-world': {
    module: 'C++ Foundations',
    title: 'Hello World — Your First Program',
    icon: '👋',
    time: '8 min',
    content: `
      <h2>Hello, World!</h2>
      <p>Every programming journey starts with printing "Hello, World!" to the screen. In C++, here's how it looks:</p>
      <div class="code-block">
        <div class="code-block-header"><span class="code-block-lang">C++</span><button class="code-block-copy">Copy</button></div>
        <pre><code><span class="tok-inc">#include</span> <span class="tok-str">&lt;iostream&gt;</span>
<span class="tok-kw">using namespace</span> <span class="tok-ns">std</span><span class="tok-punct">;</span>

<span class="tok-kw">int</span> <span class="tok-fn">main</span><span class="tok-punct">() {</span>
    cout <span class="tok-op">&lt;&lt;</span> <span class="tok-str">"Hello, World!"</span> <span class="tok-op">&lt;&lt;</span> endl<span class="tok-punct">;</span>
    <span class="tok-kw">return</span> <span class="tok-num">0</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span></code></pre>
      </div>
      <h3>Breaking It Down</h3>
      <ul>
        <li><code class="inline">#include &lt;iostream&gt;</code> — Tells the compiler to include the Input/Output stream library (needed for <code class="inline">cout</code>)</li>
        <li><code class="inline">using namespace std;</code> — Lets you write <code class="inline">cout</code> instead of <code class="inline">std::cout</code></li>
        <li><code class="inline">int main()</code> — Every C++ program must have a <code class="inline">main</code> function — it's where execution begins</li>
        <li><code class="inline">cout &lt;&lt; "Hello";</code> — Outputs text to the console. <code class="inline">&lt;&lt;</code> is the insertion operator</li>
        <li><code class="inline">return 0;</code> — Signals the OS that the program ended successfully (0 = success)</li>
      </ul>
      <div class="info-box">
        <strong>💡 endl vs \\n:</strong> <code class="inline">endl</code> prints a newline AND flushes the buffer. For performance, prefer <code class="inline">"\\n"</code> which just prints the newline.
      </div>
      <h3>Multiple Output Lines</h3>
      <div class="code-block">
        <div class="code-block-header"><span class="code-block-lang">C++</span><button class="code-block-copy">Copy</button></div>
        <pre><code><span class="tok-inc">#include</span> <span class="tok-str">&lt;iostream&gt;</span>
<span class="tok-kw">using namespace</span> <span class="tok-ns">std</span><span class="tok-punct">;</span>

<span class="tok-kw">int</span> <span class="tok-fn">main</span><span class="tok-punct">() {</span>
    cout <span class="tok-op">&lt;&lt;</span> <span class="tok-str">"Line 1\n"</span><span class="tok-punct">;</span>
    cout <span class="tok-op">&lt;&lt;</span> <span class="tok-str">"Line 2\n"</span><span class="tok-punct">;</span>
    cout <span class="tok-op">&lt;&lt;</span> <span class="tok-str">"Name: "</span> <span class="tok-op">&lt;&lt;</span> <span class="tok-str">"C++ Learner"</span> <span class="tok-op">&lt;&lt;</span> <span class="tok-str">"\n"</span><span class="tok-punct">;</span>
    <span class="tok-kw">return</span> <span class="tok-num">0</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span></code></pre>
      </div>
    `
  },
  'variables': {
    module: 'C++ Foundations',
    title: 'Variables & Data Types',
    icon: '📦',
    time: '15 min',
    content: `
      <h2>Variables & Data Types</h2>
      <p>Variables are named storage locations in memory. Every variable in C++ has a <strong>type</strong> that determines what kind of data it can hold.</p>
      <h3>Fundamental Types</h3>
      <div class="code-block">
        <div class="code-block-header"><span class="code-block-lang">C++</span><button class="code-block-copy">Copy</button></div>
        <pre><code><span class="tok-inc">#include</span> <span class="tok-str">&lt;iostream&gt;</span>
<span class="tok-kw">using namespace</span> <span class="tok-ns">std</span><span class="tok-punct">;</span>

<span class="tok-kw">int</span> <span class="tok-fn">main</span><span class="tok-punct">() {</span>
    <span class="tok-cmt">// Integer types</span>
    <span class="tok-kw">int</span>       age    <span class="tok-op">=</span> <span class="tok-num">25</span><span class="tok-punct">;</span>       <span class="tok-cmt">// 32-bit integer</span>
    <span class="tok-kw">long long</span> bigNum <span class="tok-op">=</span> <span class="tok-num">9'000'000'000LL</span><span class="tok-punct">;</span>

    <span class="tok-cmt">// Floating-point types</span>
    <span class="tok-kw">float</span>  pi32 <span class="tok-op">=</span> <span class="tok-num">3.14f</span><span class="tok-punct">;</span>
    <span class="tok-kw">double</span> pi64 <span class="tok-op">=</span> <span class="tok-num">3.14159265358979</span><span class="tok-punct">;</span>

    <span class="tok-cmt">// Boolean</span>
    <span class="tok-kw">bool</span> isLearning <span class="tok-op">=</span> <span class="tok-kw">true</span><span class="tok-punct">;</span>

    <span class="tok-cmt">// Character</span>
    <span class="tok-kw">char</span> grade <span class="tok-op">=</span> <span class="tok-str">'A'</span><span class="tok-punct">;</span>

    <span class="tok-cmt">// String (not a fundamental type, but essential)</span>
    string name <span class="tok-op">=</span> <span class="tok-str">"C++ Developer"</span><span class="tok-punct">;</span>

    cout <span class="tok-op">&lt;&lt;</span> <span class="tok-str">"Age: "</span>    <span class="tok-op">&lt;&lt;</span> age         <span class="tok-op">&lt;&lt;</span> <span class="tok-str">"\n"</span><span class="tok-punct">;</span>
    cout <span class="tok-op">&lt;&lt;</span> <span class="tok-str">"Pi: "</span>    <span class="tok-op">&lt;&lt;</span> pi64        <span class="tok-op">&lt;&lt;</span> <span class="tok-str">"\n"</span><span class="tok-punct">;</span>
    cout <span class="tok-op">&lt;&lt;</span> <span class="tok-str">"Name: "</span>  <span class="tok-op">&lt;&lt;</span> name        <span class="tok-op">&lt;&lt;</span> <span class="tok-str">"\n"</span><span class="tok-punct">;</span>
    <span class="tok-kw">return</span> <span class="tok-num">0</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span></code></pre>
      </div>
      <h3>Type Sizes</h3>
      <ul>
        <li><code class="inline">char</code> — 1 byte (−128 to 127)</li>
        <li><code class="inline">int</code> — 4 bytes (−2.1B to 2.1B)</li>
        <li><code class="inline">long long</code> — 8 bytes (±9.2 quintillion)</li>
        <li><code class="inline">float</code> — 4 bytes (~7 decimal digits)</li>
        <li><code class="inline">double</code> — 8 bytes (~15 decimal digits)</li>
        <li><code class="inline">bool</code> — 1 byte (true/false)</li>
      </ul>
      <div class="info-box">
        <strong>💡 Modern C++:</strong> Use <code class="inline">auto</code> to let the compiler deduce the type: <code class="inline">auto x = 42;</code> (deduced as <code class="inline">int</code>). Great for long type names!
      </div>
      <h3>Type Modifiers</h3>
      <div class="code-block">
        <div class="code-block-header"><span class="code-block-lang">C++</span><button class="code-block-copy">Copy</button></div>
        <pre><code><span class="tok-kw">unsigned int</span>  positiveOnly <span class="tok-op">=</span> <span class="tok-num">300</span><span class="tok-punct">;</span>  <span class="tok-cmt">// 0 to 4.2B</span>
<span class="tok-kw">const</span> <span class="tok-kw">double</span>  PI <span class="tok-op">=</span> <span class="tok-num">3.14159</span><span class="tok-punct">;</span>      <span class="tok-cmt">// Cannot be changed</span>
<span class="tok-kw">auto</span>          name <span class="tok-op">=</span> <span class="tok-str">"Bob"</span><span class="tok-punct">;</span>         <span class="tok-cmt">// const char*</span></code></pre>
      </div>
    `
  },
  'operators': {
    module: 'C++ Foundations',
    title: 'Operators & Expressions',
    icon: '⚙️',
    time: '12 min',
    content: `
      <h2>Operators & Expressions</h2>
      <p>Operators are symbols that perform operations on values. C++ has a rich set of operators grouped by type.</p>
      <h3>Arithmetic Operators</h3>
      <div class="code-block">
        <div class="code-block-header"><span class="code-block-lang">C++</span><button class="code-block-copy">Copy</button></div>
        <pre><code><span class="tok-kw">int</span> a <span class="tok-op">=</span> <span class="tok-num">10</span>, b <span class="tok-op">=</span> <span class="tok-num">3</span><span class="tok-punct">;</span>
cout <span class="tok-op">&lt;&lt;</span> a <span class="tok-op">+</span> b  <span class="tok-op">&lt;&lt;</span> <span class="tok-str">"\n"</span><span class="tok-punct">;</span>  <span class="tok-cmt">// 13  — addition</span>
cout <span class="tok-op">&lt;&lt;</span> a <span class="tok-op">-</span> b  <span class="tok-op">&lt;&lt;</span> <span class="tok-str">"\n"</span><span class="tok-punct">;</span>  <span class="tok-cmt">// 7   — subtraction</span>
cout <span class="tok-op">&lt;&lt;</span> a <span class="tok-op">*</span> b  <span class="tok-op">&lt;&lt;</span> <span class="tok-str">"\n"</span><span class="tok-punct">;</span>  <span class="tok-cmt">// 30  — multiplication</span>
cout <span class="tok-op">&lt;&lt;</span> a <span class="tok-op">/</span> b  <span class="tok-op">&lt;&lt;</span> <span class="tok-str">"\n"</span><span class="tok-punct">;</span>  <span class="tok-cmt">// 3   — integer division</span>
cout <span class="tok-op">&lt;&lt;</span> a <span class="tok-op">%</span> b  <span class="tok-op">&lt;&lt;</span> <span class="tok-str">"\n"</span><span class="tok-punct">;</span>  <span class="tok-cmt">// 1   — modulus (remainder)</span>
cout <span class="tok-op">&lt;&lt;</span> a <span class="tok-op">++</span>   <span class="tok-op">&lt;&lt;</span> <span class="tok-str">"\n"</span><span class="tok-punct">;</span>  <span class="tok-cmt">// post-increment</span></code></pre>
      </div>
      <h3>Comparison & Logical</h3>
      <div class="code-block">
        <div class="code-block-header"><span class="code-block-lang">C++</span><button class="code-block-copy">Copy</button></div>
        <pre><code><span class="tok-kw">bool</span> result<span class="tok-punct">;</span>
result <span class="tok-op">=</span> (<span class="tok-num">5</span> <span class="tok-op">==</span> <span class="tok-num">5</span>)<span class="tok-punct">;</span>   <span class="tok-cmt">// true  — equal</span>
result <span class="tok-op">=</span> (<span class="tok-num">5</span> <span class="tok-op">!=</span> <span class="tok-num">3</span>)<span class="tok-punct">;</span>   <span class="tok-cmt">// true  — not equal</span>
result <span class="tok-op">=</span> (<span class="tok-num">5</span> <span class="tok-op">&gt;</span>  <span class="tok-num">3</span>)<span class="tok-punct">;</span>   <span class="tok-cmt">// true</span>
result <span class="tok-op">=</span> (<span class="tok-num">5</span> <span class="tok-op">&lt;=</span> <span class="tok-num">5</span>)<span class="tok-punct">;</span>   <span class="tok-cmt">// true</span>

<span class="tok-cmt">// Logical operators</span>
result <span class="tok-op">=</span> (<span class="tok-kw">true</span> <span class="tok-op">&amp;&amp;</span> <span class="tok-kw">false</span>)<span class="tok-punct">;</span>  <span class="tok-cmt">// false — AND</span>
result <span class="tok-op">=</span> (<span class="tok-kw">true</span> <span class="tok-op">||</span> <span class="tok-kw">false</span>)<span class="tok-punct">;</span>  <span class="tok-cmt">// true  — OR</span>
result <span class="tok-op">=</span> (<span class="tok-op">!</span><span class="tok-kw">true</span>)<span class="tok-punct">;</span>           <span class="tok-cmt">// false — NOT</span></code></pre>
      </div>
    `
  },
  'if-else': {
    module: 'Control Flow',
    title: 'If / Else Statements',
    icon: '🔀',
    time: '10 min',
    content: `
      <h2>If / Else — Decision Making</h2>
      <p>Programs need to make decisions. The <code class="inline">if</code> statement executes a block of code only when a condition is true.</p>
      <div class="code-block">
        <div class="code-block-header"><span class="code-block-lang">C++</span><button class="code-block-copy">Copy</button></div>
        <pre><code><span class="tok-inc">#include</span> <span class="tok-str">&lt;iostream&gt;</span>
<span class="tok-kw">using namespace</span> <span class="tok-ns">std</span><span class="tok-punct">;</span>

<span class="tok-kw">int</span> <span class="tok-fn">main</span><span class="tok-punct">() {</span>
    <span class="tok-kw">int</span> score <span class="tok-op">=</span> <span class="tok-num">85</span><span class="tok-punct">;</span>

    <span class="tok-kw">if</span> (score <span class="tok-op">&gt;=</span> <span class="tok-num">90</span>) <span class="tok-punct">{</span>
        cout <span class="tok-op">&lt;&lt;</span> <span class="tok-str">"Grade: A\n"</span><span class="tok-punct">;</span>
    <span class="tok-punct">}</span> <span class="tok-kw">else if</span> (score <span class="tok-op">&gt;=</span> <span class="tok-num">80</span>) <span class="tok-punct">{</span>
        cout <span class="tok-op">&lt;&lt;</span> <span class="tok-str">"Grade: B\n"</span><span class="tok-punct">;</span>
    <span class="tok-punct">}</span> <span class="tok-kw">else if</span> (score <span class="tok-op">&gt;=</span> <span class="tok-num">70</span>) <span class="tok-punct">{</span>
        cout <span class="tok-op">&lt;&lt;</span> <span class="tok-str">"Grade: C\n"</span><span class="tok-punct">;</span>
    <span class="tok-punct">}</span> <span class="tok-kw">else</span> <span class="tok-punct">{</span>
        cout <span class="tok-op">&lt;&lt;</span> <span class="tok-str">"Grade: F\n"</span><span class="tok-punct">;</span>
    <span class="tok-punct">}</span>

    <span class="tok-cmt">// Ternary operator (compact if-else)</span>
    string result <span class="tok-op">=</span> (score <span class="tok-op">&gt;=</span> <span class="tok-num">60</span>) <span class="tok-op">?</span> <span class="tok-str">"Pass"</span> <span class="tok-op">:</span> <span class="tok-str">"Fail"</span><span class="tok-punct">;</span>
    cout <span class="tok-op">&lt;&lt;</span> result <span class="tok-op">&lt;&lt;</span> <span class="tok-str">"\n"</span><span class="tok-punct">;</span>

    <span class="tok-kw">return</span> <span class="tok-num">0</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span></code></pre>
      </div>
      <h3>Switch Statement</h3>
      <div class="code-block">
        <div class="code-block-header"><span class="code-block-lang">C++</span><button class="code-block-copy">Copy</button></div>
        <pre><code><span class="tok-kw">int</span> day <span class="tok-op">=</span> <span class="tok-num">3</span><span class="tok-punct">;</span>
<span class="tok-kw">switch</span> (day) <span class="tok-punct">{</span>
    <span class="tok-kw">case</span> <span class="tok-num">1</span><span class="tok-punct">:</span> cout <span class="tok-op">&lt;&lt;</span> <span class="tok-str">"Monday\n"</span><span class="tok-punct">;</span>    <span class="tok-kw">break</span><span class="tok-punct">;</span>
    <span class="tok-kw">case</span> <span class="tok-num">2</span><span class="tok-punct">:</span> cout <span class="tok-op">&lt;&lt;</span> <span class="tok-str">"Tuesday\n"</span><span class="tok-punct">;</span>   <span class="tok-kw">break</span><span class="tok-punct">;</span>
    <span class="tok-kw">case</span> <span class="tok-num">3</span><span class="tok-punct">:</span> cout <span class="tok-op">&lt;&lt;</span> <span class="tok-str">"Wednesday\n"</span><span class="tok-punct">;</span> <span class="tok-kw">break</span><span class="tok-punct">;</span>
    <span class="tok-kw">default</span><span class="tok-punct">:</span> cout <span class="tok-op">&lt;&lt;</span> <span class="tok-str">"Other day\n"</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span></code></pre>
      </div>
      <div class="warn-box"><strong>⚠️ Don't forget break!</strong> Without <code class="inline">break</code>, execution "falls through" to the next case.</div>
    `
  },
  'loops': {
    module: 'Control Flow',
    title: 'Loops — for, while, do-while',
    icon: '🔄',
    time: '14 min',
    content: `
      <h2>Loops</h2>
      <p>Loops let you repeat a block of code multiple times. C++ has three types of loops.</p>
      <h3>For Loop</h3>
      <p>Best when you know exactly how many iterations you need.</p>
      <div class="code-block">
        <div class="code-block-header"><span class="code-block-lang">C++</span><button class="code-block-copy">Copy</button></div>
        <pre><code><span class="tok-cmt">// Classic for loop</span>
<span class="tok-kw">for</span> (<span class="tok-kw">int</span> i <span class="tok-op">=</span> <span class="tok-num">0</span>; i <span class="tok-op">&lt;</span> <span class="tok-num">5</span>; i<span class="tok-op">++</span>) <span class="tok-punct">{</span>
    cout <span class="tok-op">&lt;&lt;</span> i <span class="tok-op">&lt;&lt;</span> <span class="tok-str">" "</span><span class="tok-punct">;</span>   <span class="tok-cmt">// 0 1 2 3 4</span>
<span class="tok-punct">}</span>

<span class="tok-cmt">// Range-based for (C++11) — iterate over a collection</span>
<span class="tok-kw">int</span> nums[] <span class="tok-op">=</span> {<span class="tok-num">10</span>, <span class="tok-num">20</span>, <span class="tok-num">30</span>}<span class="tok-punct">;</span>
<span class="tok-kw">for</span> (<span class="tok-kw">int</span> n <span class="tok-punct">:</span> nums) <span class="tok-punct">{</span>
    cout <span class="tok-op">&lt;&lt;</span> n <span class="tok-op">&lt;&lt;</span> <span class="tok-str">" "</span><span class="tok-punct">;</span>   <span class="tok-cmt">// 10 20 30</span>
<span class="tok-punct">}</span></code></pre>
      </div>
      <h3>While Loop</h3>
      <p>Best when the number of iterations isn't known upfront.</p>
      <div class="code-block">
        <div class="code-block-header"><span class="code-block-lang">C++</span><button class="code-block-copy">Copy</button></div>
        <pre><code><span class="tok-kw">int</span> count <span class="tok-op">=</span> <span class="tok-num">1</span><span class="tok-punct">;</span>
<span class="tok-kw">while</span> (count <span class="tok-op">&lt;=</span> <span class="tok-num">5</span>) <span class="tok-punct">{</span>
    cout <span class="tok-op">&lt;&lt;</span> count <span class="tok-op">&lt;&lt;</span> <span class="tok-str">" "</span><span class="tok-punct">;</span>
    count<span class="tok-op">++</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>  <span class="tok-cmt">// 1 2 3 4 5</span>

<span class="tok-cmt">// do-while — runs at least once</span>
<span class="tok-kw">do</span> <span class="tok-punct">{</span>
    cout <span class="tok-op">&lt;&lt;</span> <span class="tok-str">"Runs once even if false\n"</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span> <span class="tok-kw">while</span> (<span class="tok-kw">false</span>)<span class="tok-punct">;</span></code></pre>
      </div>
      <h3>Loop Control</h3>
      <div class="code-block">
        <div class="code-block-header"><span class="code-block-lang">C++</span><button class="code-block-copy">Copy</button></div>
        <pre><code><span class="tok-kw">for</span> (<span class="tok-kw">int</span> i <span class="tok-op">=</span> <span class="tok-num">0</span>; i <span class="tok-op">&lt;</span> <span class="tok-num">10</span>; i<span class="tok-op">++</span>) <span class="tok-punct">{</span>
    <span class="tok-kw">if</span> (i <span class="tok-op">==</span> <span class="tok-num">3</span>) <span class="tok-kw">continue</span><span class="tok-punct">;</span>  <span class="tok-cmt">// skip 3</span>
    <span class="tok-kw">if</span> (i <span class="tok-op">==</span> <span class="tok-num">7</span>) <span class="tok-kw">break</span><span class="tok-punct">;</span>     <span class="tok-cmt">// stop at 7</span>
    cout <span class="tok-op">&lt;&lt;</span> i <span class="tok-op">&lt;&lt;</span> <span class="tok-str">" "</span><span class="tok-punct">;</span>  <span class="tok-cmt">// 0 1 2 4 5 6</span>
<span class="tok-punct">}</span></code></pre>
      </div>
    `
  },
  'functions-basic': {
    module: 'Functions',
    title: 'Functions — The Building Blocks',
    icon: '🧩',
    time: '16 min',
    content: `
      <h2>Functions</h2>
      <p>A function is a named, reusable block of code that performs a specific task. Functions are the fundamental unit of code organization in C++.</p>
      <h3>Function Anatomy</h3>
      <div class="code-block">
        <div class="code-block-header"><span class="code-block-lang">C++</span><button class="code-block-copy">Copy</button></div>
        <pre><code><span class="tok-cmt">// return_type functionName(parameters) { body }</span>

<span class="tok-kw">int</span> <span class="tok-fn">add</span>(<span class="tok-kw">int</span> a, <span class="tok-kw">int</span> b) <span class="tok-punct">{</span>
    <span class="tok-kw">return</span> a <span class="tok-op">+</span> b<span class="tok-punct">;</span>
<span class="tok-punct">}</span>

<span class="tok-kw">void</span> <span class="tok-fn">greet</span>(string name) <span class="tok-punct">{</span>   <span class="tok-cmt">// void = no return value</span>
    cout <span class="tok-op">&lt;&lt;</span> <span class="tok-str">"Hello, "</span> <span class="tok-op">&lt;&lt;</span> name <span class="tok-op">&lt;&lt;</span> <span class="tok-str">"!\n"</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>

<span class="tok-kw">double</span> <span class="tok-fn">power</span>(<span class="tok-kw">double</span> base, <span class="tok-kw">int</span> exp <span class="tok-op">=</span> <span class="tok-num">2</span>) <span class="tok-punct">{</span>  <span class="tok-cmt">// default arg</span>
    <span class="tok-kw">double</span> result <span class="tok-op">=</span> <span class="tok-num">1</span><span class="tok-punct">;</span>
    <span class="tok-kw">for</span> (<span class="tok-kw">int</span> i <span class="tok-op">=</span> <span class="tok-num">0</span>; i <span class="tok-op">&lt;</span> exp; i<span class="tok-op">++</span>) result <span class="tok-op">*=</span> base<span class="tok-punct">;</span>
    <span class="tok-kw">return</span> result<span class="tok-punct">;</span>
<span class="tok-punct">}</span>

<span class="tok-kw">int</span> <span class="tok-fn">main</span><span class="tok-punct">() {</span>
    cout <span class="tok-op">&lt;&lt;</span> <span class="tok-fn">add</span>(<span class="tok-num">3</span>, <span class="tok-num">4</span>)    <span class="tok-op">&lt;&lt;</span> <span class="tok-str">"\n"</span><span class="tok-punct">;</span>  <span class="tok-cmt">// 7</span>
    <span class="tok-fn">greet</span>(<span class="tok-str">"World"</span>)<span class="tok-punct">;</span>          <span class="tok-cmt">// Hello, World!</span>
    cout <span class="tok-op">&lt;&lt;</span> <span class="tok-fn">power</span>(<span class="tok-num">3</span>)      <span class="tok-op">&lt;&lt;</span> <span class="tok-str">"\n"</span><span class="tok-punct">;</span>  <span class="tok-cmt">// 9 (3²)</span>
    cout <span class="tok-op">&lt;&lt;</span> <span class="tok-fn">power</span>(<span class="tok-num">2</span>, <span class="tok-num">10</span>) <span class="tok-op">&lt;&lt;</span> <span class="tok-str">"\n"</span><span class="tok-punct">;</span>  <span class="tok-cmt">// 1024 (2¹⁰)</span>
<span class="tok-punct">}</span></code></pre>
      </div>
      <h3>Pass by Value vs Reference</h3>
      <div class="code-block">
        <div class="code-block-header"><span class="code-block-lang">C++</span><button class="code-block-copy">Copy</button></div>
        <pre><code><span class="tok-kw">void</span> <span class="tok-fn">byValue</span>(<span class="tok-kw">int</span> x)  { x <span class="tok-op">=</span> <span class="tok-num">100</span><span class="tok-punct">;</span> }   <span class="tok-cmt">// copy; original unchanged</span>
<span class="tok-kw">void</span> <span class="tok-fn">byRef</span>  (<span class="tok-kw">int</span><span class="tok-op">&amp;</span> x) { x <span class="tok-op">=</span> <span class="tok-num">100</span><span class="tok-punct">;</span> }   <span class="tok-cmt">// alias; original IS changed</span>

<span class="tok-kw">int</span> n <span class="tok-op">=</span> <span class="tok-num">5</span><span class="tok-punct">;</span>
<span class="tok-fn">byValue</span>(n)<span class="tok-punct">;</span>  cout <span class="tok-op">&lt;&lt;</span> n<span class="tok-punct">;</span>  <span class="tok-cmt">// 5</span>
<span class="tok-fn">byRef</span>(n)<span class="tok-punct">;</span>    cout <span class="tok-op">&lt;&lt;</span> n<span class="tok-punct">;</span>  <span class="tok-cmt">// 100</span></code></pre>
      </div>
    `
  },
  'pointers': {
    module: 'Pointers & Memory',
    title: 'Pointers — Memory Addresses',
    icon: '🎯',
    time: '20 min',
    content: `
      <h2>Pointers</h2>
      <p>A pointer is a variable that <strong>stores the memory address</strong> of another variable. Pointers give you direct control over memory — a superpower unique to C/C++.</p>
      <div class="code-block">
        <div class="code-block-header"><span class="code-block-lang">C++</span><button class="code-block-copy">Copy</button></div>
        <pre><code><span class="tok-kw">int</span> x <span class="tok-op">=</span> <span class="tok-num">42</span><span class="tok-punct">;</span>
<span class="tok-kw">int</span><span class="tok-op">*</span> ptr <span class="tok-op">=</span> <span class="tok-op">&amp;</span>x<span class="tok-punct">;</span>         <span class="tok-cmt">// ptr holds the address of x</span>

cout <span class="tok-op">&lt;&lt;</span> x   <span class="tok-op">&lt;&lt;</span> <span class="tok-str">"\n"</span><span class="tok-punct">;</span>   <span class="tok-cmt">// 42    — value of x</span>
cout <span class="tok-op">&lt;&lt;</span> <span class="tok-op">&amp;</span>x  <span class="tok-op">&lt;&lt;</span> <span class="tok-str">"\n"</span><span class="tok-punct">;</span>   <span class="tok-cmt">// 0x... — address of x</span>
cout <span class="tok-op">&lt;&lt;</span> ptr <span class="tok-op">&lt;&lt;</span> <span class="tok-str">"\n"</span><span class="tok-punct">;</span>   <span class="tok-cmt">// 0x... — same address stored in ptr</span>
cout <span class="tok-op">&lt;&lt;</span> <span class="tok-op">*</span>ptr <span class="tok-op">&lt;&lt;</span><span class="tok-str">"\n"</span><span class="tok-punct">;</span>  <span class="tok-cmt">// 42    — value AT that address (dereference)</span>

<span class="tok-op">*</span>ptr <span class="tok-op">=</span> <span class="tok-num">100</span><span class="tok-punct">;</span>             <span class="tok-cmt">// modify x through the pointer</span>
cout <span class="tok-op">&lt;&lt;</span> x <span class="tok-op">&lt;&lt;</span> <span class="tok-str">"\n"</span><span class="tok-punct">;</span>    <span class="tok-cmt">// 100   — x is now 100!</span></code></pre>
      </div>
      <h3>Dynamic Memory Allocation</h3>
      <div class="code-block">
        <div class="code-block-header"><span class="code-block-lang">C++</span><button class="code-block-copy">Copy</button></div>
        <pre><code><span class="tok-cmt">// Allocate memory on the heap</span>
<span class="tok-kw">int</span><span class="tok-op">*</span> heap <span class="tok-op">=</span> <span class="tok-kw">new</span> <span class="tok-kw">int</span>(<span class="tok-num">99</span>)<span class="tok-punct">;</span>
cout <span class="tok-op">&lt;&lt;</span> <span class="tok-op">*</span>heap<span class="tok-punct">;</span>    <span class="tok-cmt">// 99</span>

<span class="tok-kw">delete</span> heap<span class="tok-punct">;</span>      <span class="tok-cmt">// ALWAYS free heap memory!</span>
heap <span class="tok-op">=</span> <span class="tok-kw">nullptr</span><span class="tok-punct">;</span>  <span class="tok-cmt">// Safe practice after delete</span>

<span class="tok-cmt">// Heap array</span>
<span class="tok-kw">int</span><span class="tok-op">*</span> arr <span class="tok-op">=</span> <span class="tok-kw">new</span> <span class="tok-kw">int</span>[<span class="tok-num">5</span>]<span class="tok-punct">;</span>
arr[<span class="tok-num">0</span>] <span class="tok-op">=</span> <span class="tok-num">10</span><span class="tok-punct">;</span>
<span class="tok-kw">delete</span>[] arr<span class="tok-punct">;</span>    <span class="tok-cmt">// delete[] for arrays</span></code></pre>
      </div>
      <div class="warn-box"><strong>⚠️ Memory Leaks!</strong> Every <code class="inline">new</code> must be paired with a <code class="inline">delete</code>. Modern C++ uses smart pointers (<code class="inline">std::unique_ptr</code>, <code class="inline">std::shared_ptr</code>) to manage memory automatically.</div>
    `
  },
  'classes': {
    module: 'OOP',
    title: 'Classes & Objects',
    icon: '🏛️',
    time: '22 min',
    content: `
      <h2>Classes & Objects</h2>
      <p>A <strong>class</strong> is a blueprint for creating objects. It bundles data (attributes) and functions (methods) together — the heart of Object-Oriented Programming.</p>
      <div class="code-block">
        <div class="code-block-header"><span class="code-block-lang">C++</span><button class="code-block-copy">Copy</button></div>
        <pre><code><span class="tok-inc">#include</span> <span class="tok-str">&lt;iostream&gt;</span>
<span class="tok-inc">#include</span> <span class="tok-str">&lt;string&gt;</span>
<span class="tok-kw">using namespace</span> <span class="tok-ns">std</span><span class="tok-punct">;</span>

<span class="tok-kw">class</span> <span class="tok-fn">Car</span> <span class="tok-punct">{</span>
<span class="tok-kw">private</span><span class="tok-punct">:</span>                          <span class="tok-cmt">// Only accessible inside class</span>
    string brand<span class="tok-punct">;</span>
    <span class="tok-kw">int</span>    year<span class="tok-punct">;</span>
    <span class="tok-kw">double</span> speed<span class="tok-punct">;</span>

<span class="tok-kw">public</span><span class="tok-punct">:</span>                           <span class="tok-cmt">// Accessible from outside</span>
    <span class="tok-cmt">// Constructor</span>
    <span class="tok-fn">Car</span>(string b, <span class="tok-kw">int</span> y) <span class="tok-punct">{</span>
        brand <span class="tok-op">=</span> b<span class="tok-punct">;</span>
        year  <span class="tok-op">=</span> y<span class="tok-punct">;</span>
        speed <span class="tok-op">=</span> <span class="tok-num">0.0</span><span class="tok-punct">;</span>
    <span class="tok-punct">}</span>

    <span class="tok-kw">void</span> <span class="tok-fn">accelerate</span>(<span class="tok-kw">double</span> amount) <span class="tok-punct">{</span>
        speed <span class="tok-op">+=</span> amount<span class="tok-punct">;</span>
    <span class="tok-punct">}</span>

    <span class="tok-kw">void</span> <span class="tok-fn">display</span>() <span class="tok-kw">const</span> <span class="tok-punct">{</span>     <span class="tok-cmt">// const = doesn't modify state</span>
        cout <span class="tok-op">&lt;&lt;</span> brand <span class="tok-op">&lt;&lt;</span> <span class="tok-str">" ("</span> <span class="tok-op">&lt;&lt;</span> year
             <span class="tok-op">&lt;&lt;</span> <span class="tok-str">") @ "</span> <span class="tok-op">&lt;&lt;</span> speed <span class="tok-op">&lt;&lt;</span> <span class="tok-str">" mph\n"</span><span class="tok-punct">;</span>
    <span class="tok-punct">}</span>
<span class="tok-punct">};</span>

<span class="tok-kw">int</span> <span class="tok-fn">main</span><span class="tok-punct">() {</span>
    Car tesla(<span class="tok-str">"Tesla"</span>, <span class="tok-num">2024</span>)<span class="tok-punct">;</span>
    tesla<span class="tok-punct">.</span><span class="tok-fn">accelerate</span>(<span class="tok-num">60</span>)<span class="tok-punct">;</span>
    tesla<span class="tok-punct">.</span><span class="tok-fn">display</span>()<span class="tok-punct">;</span>   <span class="tok-cmt">// Tesla (2024) @ 60 mph</span>
<span class="tok-punct">}</span></code></pre>
      </div>
      <h3>Inheritance</h3>
      <div class="code-block">
        <div class="code-block-header"><span class="code-block-lang">C++</span><button class="code-block-copy">Copy</button></div>
        <pre><code><span class="tok-kw">class</span> <span class="tok-fn">Animal</span> <span class="tok-punct">{</span>
<span class="tok-kw">public</span><span class="tok-punct">:</span>
    <span class="tok-kw">virtual</span> <span class="tok-kw">void</span> <span class="tok-fn">speak</span>() <span class="tok-punct">{</span>
        cout <span class="tok-op">&lt;&lt;</span> <span class="tok-str">"...\n"</span><span class="tok-punct">;</span>
    <span class="tok-punct">}</span>
<span class="tok-punct">};</span>

<span class="tok-kw">class</span> <span class="tok-fn">Dog</span> <span class="tok-punct">:</span> <span class="tok-kw">public</span> <span class="tok-fn">Animal</span> <span class="tok-punct">{</span>   <span class="tok-cmt">// Dog inherits Animal</span>
<span class="tok-kw">public</span><span class="tok-punct">:</span>
    <span class="tok-kw">void</span> <span class="tok-fn">speak</span>() <span class="tok-kw">override</span> <span class="tok-punct">{</span>   <span class="tok-cmt">// override the virtual function</span>
        cout <span class="tok-op">&lt;&lt;</span> <span class="tok-str">"Woof!\n"</span><span class="tok-punct">;</span>
    <span class="tok-punct">}</span>
<span class="tok-punct">};</span></code></pre>
      </div>
    `
  },
  'stl-vectors': {
    module: 'STL',
    title: 'STL — Vectors & Collections',
    icon: '📚',
    time: '18 min',
    content: `
      <h2>Standard Template Library (STL)</h2>
      <p>The STL is a powerful library of ready-to-use data structures and algorithms. <code class="inline">std::vector</code> is the most commonly used container — a dynamic array.</p>
      <div class="code-block">
        <div class="code-block-header"><span class="code-block-lang">C++</span><button class="code-block-copy">Copy</button></div>
        <pre><code><span class="tok-inc">#include</span> <span class="tok-str">&lt;iostream&gt;</span>
<span class="tok-inc">#include</span> <span class="tok-str">&lt;vector&gt;</span>
<span class="tok-inc">#include</span> <span class="tok-str">&lt;algorithm&gt;</span>
<span class="tok-kw">using namespace</span> <span class="tok-ns">std</span><span class="tok-punct">;</span>

<span class="tok-kw">int</span> <span class="tok-fn">main</span><span class="tok-punct">() {</span>
    vector<span class="tok-op">&lt;</span><span class="tok-kw">int</span><span class="tok-op">&gt;</span> nums <span class="tok-op">=</span> {<span class="tok-num">5</span>, <span class="tok-num">2</span>, <span class="tok-num">8</span>, <span class="tok-num">1</span>, <span class="tok-num">9</span>}<span class="tok-punct">;</span>

    nums<span class="tok-punct">.</span><span class="tok-fn">push_back</span>(<span class="tok-num">3</span>)<span class="tok-punct">;</span>      <span class="tok-cmt">// Add to end</span>
    nums<span class="tok-punct">.</span><span class="tok-fn">pop_back</span>()<span class="tok-punct">;</span>        <span class="tok-cmt">// Remove from end</span>

    cout <span class="tok-op">&lt;&lt;</span> <span class="tok-str">"Size: "</span> <span class="tok-op">&lt;&lt;</span> nums<span class="tok-punct">.</span><span class="tok-fn">size</span>() <span class="tok-op">&lt;&lt;</span> <span class="tok-str">"\n"</span><span class="tok-punct">;</span>  <span class="tok-cmt">// 5</span>

    <span class="tok-cmt">// Sort using STL algorithm</span>
    <span class="tok-fn">sort</span>(nums<span class="tok-punct">.</span><span class="tok-fn">begin</span>(), nums<span class="tok-punct">.</span><span class="tok-fn">end</span>())<span class="tok-punct">;</span>

    <span class="tok-cmt">// Iterate with range-for</span>
    <span class="tok-kw">for</span> (<span class="tok-kw">int</span> n <span class="tok-punct">:</span> nums) cout <span class="tok-op">&lt;&lt;</span> n <span class="tok-op">&lt;&lt;</span> <span class="tok-str">" "</span><span class="tok-punct">;</span>
    <span class="tok-cmt">// 1 2 5 8 9</span>

    <span class="tok-cmt">// Find an element</span>
    <span class="tok-kw">auto</span> it <span class="tok-op">=</span> <span class="tok-fn">find</span>(nums<span class="tok-punct">.</span><span class="tok-fn">begin</span>(), nums<span class="tok-punct">.</span><span class="tok-fn">end</span>(), <span class="tok-num">8</span>)<span class="tok-punct">;</span>
    <span class="tok-kw">if</span> (it <span class="tok-op">!=</span> nums<span class="tok-punct">.</span><span class="tok-fn">end</span>()) cout <span class="tok-op">&lt;&lt;</span> <span class="tok-str">"Found 8!\n"</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span></code></pre>
      </div>
      <h3>Other Key Containers</h3>
      <div class="code-block">
        <div class="code-block-header"><span class="code-block-lang">C++</span><button class="code-block-copy">Copy</button></div>
        <pre><code><span class="tok-inc">#include</span> <span class="tok-str">&lt;map&gt;</span>
<span class="tok-inc">#include</span> <span class="tok-str">&lt;set&gt;</span>

<span class="tok-cmt">// map: key-value pairs (sorted)</span>
map<span class="tok-op">&lt;</span>string, <span class="tok-kw">int</span><span class="tok-op">&gt;</span> scores<span class="tok-punct">;</span>
scores[<span class="tok-str">"Alice"</span>] <span class="tok-op">=</span> <span class="tok-num">95</span><span class="tok-punct">;</span>
scores[<span class="tok-str">"Bob"</span>]   <span class="tok-op">=</span> <span class="tok-num">82</span><span class="tok-punct">;</span>

<span class="tok-cmt">// set: unique elements (sorted)</span>
set<span class="tok-op">&lt;</span><span class="tok-kw">int</span><span class="tok-op">&gt;</span> unique_nums <span class="tok-op">=</span> {<span class="tok-num">3</span>, <span class="tok-num">1</span>, <span class="tok-num">4</span>, <span class="tok-num">1</span>, <span class="tok-num">5</span>}<span class="tok-punct">;</span>
<span class="tok-cmt">// Contains: {1, 3, 4, 5} — duplicates removed!</span></code></pre>
      </div>
    `
  },
  'templates-basic': {
    module: 'Templates',
    title: 'Templates — Generic Programming',
    icon: '🔬',
    time: '18 min',
    content: `
      <h2>Templates</h2>
      <p>Templates let you write code that works with <strong>any data type</strong>. They're the foundation of generic programming in C++ and the STL itself.</p>
      <div class="code-block">
        <div class="code-block-header"><span class="code-block-lang">C++</span><button class="code-block-copy">Copy</button></div>
        <pre><code><span class="tok-cmt">// Function template — works for any type T</span>
<span class="tok-kw">template</span><span class="tok-op">&lt;</span><span class="tok-kw">typename</span> T<span class="tok-op">&gt;</span>
T <span class="tok-fn">maxOf</span>(T a, T b) <span class="tok-punct">{</span>
    <span class="tok-kw">return</span> (a <span class="tok-op">&gt;</span> b) <span class="tok-op">?</span> a <span class="tok-op">:</span> b<span class="tok-punct">;</span>
<span class="tok-punct">}</span>

cout <span class="tok-op">&lt;&lt;</span> <span class="tok-fn">maxOf</span>(<span class="tok-num">3</span>, <span class="tok-num">7</span>)<span class="tok-punct">;</span>            <span class="tok-cmt">// 7 (int)</span>
cout <span class="tok-op">&lt;&lt;</span> <span class="tok-fn">maxOf</span>(<span class="tok-num">3.14</span>, <span class="tok-num">2.71</span>)<span class="tok-punct">;</span>     <span class="tok-cmt">// 3.14 (double)</span>
cout <span class="tok-op">&lt;&lt;</span> <span class="tok-fn">maxOf</span>(<span class="tok-str">'z'</span>, <span class="tok-str">'a'</span>)<span class="tok-punct">;</span>        <span class="tok-cmt">// z (char)</span>

<span class="tok-cmt">// Class template</span>
<span class="tok-kw">template</span><span class="tok-op">&lt;</span><span class="tok-kw">typename</span> T<span class="tok-op">&gt;</span>
<span class="tok-kw">class</span> <span class="tok-fn">Box</span> <span class="tok-punct">{</span>
    T value<span class="tok-punct">;</span>
<span class="tok-kw">public</span><span class="tok-punct">:</span>
    <span class="tok-fn">Box</span>(T v) <span class="tok-punct">:</span> value(v) <span class="tok-punct">{}</span>
    T <span class="tok-fn">get</span>() <span class="tok-punct">{</span> <span class="tok-kw">return</span> value<span class="tok-punct">;</span> <span class="tok-punct">}</span>
<span class="tok-punct">};</span>

Box<span class="tok-op">&lt;</span><span class="tok-kw">int</span><span class="tok-op">&gt;</span>    intBox(<span class="tok-num">42</span>)<span class="tok-punct">;</span>
Box<span class="tok-op">&lt;</span>string<span class="tok-op">&gt;</span> strBox(<span class="tok-str">"hello"</span>)<span class="tok-punct">;</span>
cout <span class="tok-op">&lt;&lt;</span> intBox<span class="tok-punct">.</span><span class="tok-fn">get</span>()<span class="tok-punct">;</span>   <span class="tok-cmt">// 42</span>
cout <span class="tok-op">&lt;&lt;</span> strBox<span class="tok-punct">.</span><span class="tok-fn">get</span>()<span class="tok-punct">;</span>  <span class="tok-cmt">// hello</span></code></pre>
      </div>
    `
  },
  'move-semantics': {
    module: 'Modern C++',
    title: 'Move Semantics (C++11)',
    icon: '⚡',
    time: '20 min',
    content: `
      <h2>Move Semantics</h2>
      <p>C++11 introduced <strong>move semantics</strong> — the ability to "steal" resources from temporary objects instead of copying them. This dramatically improves performance.</p>
      <div class="code-block">
        <div class="code-block-header"><span class="code-block-lang">C++</span><button class="code-block-copy">Copy</button></div>
        <pre><code><span class="tok-inc">#include</span> <span class="tok-str">&lt;iostream&gt;</span>
<span class="tok-inc">#include</span> <span class="tok-str">&lt;string&gt;</span>
<span class="tok-inc">#include</span> <span class="tok-str">&lt;utility&gt;</span>
<span class="tok-kw">using namespace</span> <span class="tok-ns">std</span><span class="tok-punct">;</span>

<span class="tok-kw">class</span> <span class="tok-fn">Buffer</span> <span class="tok-punct">{</span>
    <span class="tok-kw">int</span><span class="tok-op">*</span> data<span class="tok-punct">;</span>
    size_t size<span class="tok-punct">;</span>
<span class="tok-kw">public</span><span class="tok-punct">:</span>
    <span class="tok-fn">Buffer</span>(size_t n) <span class="tok-punct">:</span> data(<span class="tok-kw">new</span> <span class="tok-kw">int</span>[n]), size(n) <span class="tok-punct">{}</span>

    <span class="tok-cmt">// Move constructor — "steal" the resource</span>
    <span class="tok-fn">Buffer</span>(Buffer<span class="tok-op">&amp;&amp;</span> other) <span class="tok-kw">noexcept</span>
        <span class="tok-punct">:</span> data(other.data), size(other.size) <span class="tok-punct">{</span>
        other.data <span class="tok-op">=</span> <span class="tok-kw">nullptr</span><span class="tok-punct">;</span>   <span class="tok-cmt">// Leave source in valid state</span>
        other.size <span class="tok-op">=</span> <span class="tok-num">0</span><span class="tok-punct">;</span>
    <span class="tok-punct">}</span>

    ~<span class="tok-fn">Buffer</span>() <span class="tok-punct">{</span> <span class="tok-kw">delete</span>[] data<span class="tok-punct">;</span> <span class="tok-punct">}</span>
<span class="tok-punct">};</span>

<span class="tok-kw">int</span> <span class="tok-fn">main</span><span class="tok-punct">() {</span>
    Buffer a(<span class="tok-num">1000</span>)<span class="tok-punct">;</span>
    Buffer b <span class="tok-op">=</span> move(a)<span class="tok-punct">;</span>   <span class="tok-cmt">// Move, not copy — O(1) instead of O(n)!</span>
    <span class="tok-cmt">// 'a' is now empty; 'b' owns the data</span>
<span class="tok-punct">}</span></code></pre>
      </div>
      <div class="info-box">
        <strong>💡 Key Insight:</strong> Copying 1,000,000 ints takes O(n) time. Moving takes O(1) — it just transfers ownership of the pointer. This is why the STL is so fast!
      </div>
    `
  }
};

/* sidebar groups */
const SIDEBAR_GROUPS = [
  { label: '01 · Foundations', items: [
    { id: 'setup',          icon: '🔧', label: 'Setup & Compilation' },
    { id: 'hello-world',    icon: '👋', label: 'Hello World' },
    { id: 'variables',      icon: '📦', label: 'Variables & Types' },
    { id: 'operators',      icon: '⚙️', label: 'Operators' },
  ]},
  { label: '02 · Control Flow', items: [
    { id: 'if-else', icon: '🔀', label: 'If / Else' },
    { id: 'loops',   icon: '🔄', label: 'Loops' },
  ]},
  { label: '03 · Functions', items: [
    { id: 'functions-basic', icon: '🧩', label: 'Functions Basics' },
  ]},
  { label: '05 · Pointers', items: [
    { id: 'pointers', icon: '🎯', label: 'Pointers & Memory' },
  ]},
  { label: '06 · OOP', items: [
    { id: 'classes', icon: '🏛️', label: 'Classes & Objects' },
  ]},
  { label: '07 · STL', items: [
    { id: 'stl-vectors', icon: '📚', label: 'Vectors & Collections' },
  ]},
  { label: '08 · Templates', items: [
    { id: 'templates-basic', icon: '🔬', label: 'Generic Programming' },
  ]},
  { label: '09 · Modern C++', items: [
    { id: 'move-semantics', icon: '⚡', label: 'Move Semantics' },
  ]},
];

let completedLessons = new Set(JSON.parse(localStorage.getItem('completedLessons') || '[]'));
let currentLessonId = 'hello-world';

/* ══════════════════════ BUILD CURRICULUM ════════════════ */
function buildCurriculum() {
  const grid = document.getElementById('curriculumGrid');
  grid.innerHTML = CURRICULUM.map(c => `
    <div class="curriculum-card" onclick="scrollToLessons()">
      <div class="curriculum-card-header">
        <span class="curriculum-card-num">${c.num}</span>
        <span class="curriculum-card-level level-${c.level}">${c.level}</span>
      </div>
      <h3>${c.title}</h3>
      <p>${c.desc}</p>
      <div class="curriculum-topics">
        ${c.topics.slice(0,5).map(t => `<span class="topic-chip">${t}</span>`).join('')}
        ${c.topics.length > 5 ? `<span class="topic-chip">+${c.topics.length - 5} more</span>` : ''}
      </div>
      <div class="curriculum-card-footer">
        <span class="lessons-count">📖 ${c.lessons} lessons</span>
        <div class="card-arrow">→</div>
      </div>
    </div>
  `).join('');
}

function scrollToLessons() {
  document.getElementById('lessons').scrollIntoView({ behavior: 'smooth' });
}

/* ══════════════════════ BUILD SIDEBAR ════════════════════ */
function buildSidebar() {
  const sidebar = document.getElementById('lessonsSidebar');
  sidebar.innerHTML = SIDEBAR_GROUPS.map((group, gi) => `
    <div class="sidebar-group ${gi === 0 ? 'open' : ''}" id="sg-${gi}">
      <div class="sidebar-group-title" onclick="toggleGroup(${gi})">
        ${group.label} <span class="chevron">▾</span>
      </div>
      <div class="sidebar-items">
        ${group.items.map(item => `
          <div class="sidebar-item ${item.id === currentLessonId ? 'active' : ''} ${completedLessons.has(item.id) ? 'done' : ''}"
               id="si-${item.id}"
               onclick="loadLesson('${item.id}')">
            <span class="sidebar-item-icon">${item.icon}</span>
            ${item.label}
            <span class="sidebar-item-done">✓</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function toggleGroup(gi) {
  document.getElementById('sg-' + gi).classList.toggle('open');
}

/* ══════════════════════ LOAD LESSON ══════════════════════ */
function loadLesson(id) {
  const lesson = LESSONS[id];
  if (!lesson) return;
  currentLessonId = id;

  // Update sidebar
  document.querySelectorAll('.sidebar-item').forEach(el => el.classList.remove('active'));
  const sideEl = document.getElementById('si-' + id);
  if (sideEl) {
    sideEl.classList.add('active');
    sideEl.scrollIntoView({ block: 'nearest' });
    // Open parent group
    const group = sideEl.closest('.sidebar-group');
    if (group) group.classList.add('open');
  }

  // All lesson IDs flat list for prev/next
  const allIds = SIDEBAR_GROUPS.flatMap(g => g.items.map(i => i.id));
  const idx = allIds.indexOf(id);

  const isDone = completedLessons.has(id);
  const content = document.getElementById('lessonContent');
  content.innerHTML = `
    <div class="lesson-header">
      <div class="lesson-breadcrumb">
        <span>${lesson.module}</span>
        <span>›</span>
        <span>${lesson.title}</span>
      </div>
      <h1>${lesson.icon} ${lesson.title}</h1>
      <div class="lesson-meta">
        <span class="lesson-meta-item">⏱ ${lesson.time} read</span>
        <span class="lesson-meta-item">📂 ${lesson.module}</span>
        ${isDone ? '<span class="lesson-meta-item" style="color:var(--accent-green)">✓ Completed</span>' : ''}
      </div>
    </div>
    <div class="lesson-body">${lesson.content}</div>
    ${renderLcPanel(id)}
    <div class="lesson-nav">
      <button class="lesson-nav-btn" onclick="loadLesson('${allIds[idx-1]}')"
        ${idx === 0 ? 'disabled' : ''}>
        ← Previous
      </button>
      <button class="lesson-done-btn ${isDone ? 'done-state' : ''}"
        id="doneBtn" onclick="markDone('${id}')">
        ${isDone ? '✓ Completed' : 'Mark as Done'}
      </button>
      <button class="lesson-nav-btn" onclick="loadLesson('${allIds[idx+1]}')"
        ${idx === allIds.length - 1 ? 'disabled' : ''}>
        Next →
      </button>
    </div>
  `;

  // Code copy buttons
  content.querySelectorAll('.code-block-copy').forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.closest('.code-block').querySelector('pre').textContent;
      navigator.clipboard.writeText(code).then(() => {
        btn.textContent = 'Copied!';
        setTimeout(() => btn.textContent = 'Copy', 1500);
      });
    });
  });
}

function markDone(id) {
  completedLessons.add(id);
  localStorage.setItem('completedLessons', JSON.stringify([...completedLessons]));
  const sideEl = document.getElementById('si-' + id);
  if (sideEl) sideEl.classList.add('done');
  const btn = document.getElementById('doneBtn');
  if (btn) { btn.textContent = '✓ Completed'; btn.classList.add('done-state'); }
  // Update meta
  const meta = document.querySelector('.lesson-meta');
  if (meta && !meta.querySelector('[style*="green"]')) {
    const span = document.createElement('span');
    span.className = 'lesson-meta-item';
    span.style.color = 'var(--accent-green)';
    span.textContent = '✓ Completed';
    meta.appendChild(span);
  }
}

/* ══════════════════════ PLAYGROUND ══════════════════════ */
const CODE_TEMPLATES = {
  hello: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    cout << "Welcome to C++ Mastery!" << endl;
    return 0;
}`,
  variables: `#include <iostream>
#include <string>
using namespace std;

int main() {
    int    age     = 25;
    double height  = 5.9;
    bool   active  = true;
    char   grade   = 'A';
    string name    = "C++ Developer";

    cout << "Name:   " << name   << endl;
    cout << "Age:    " << age    << endl;
    cout << "Height: " << height << endl;
    cout << "Grade:  " << grade  << endl;
    cout << "Active: " << (active ? "Yes" : "No") << endl;
    return 0;
}`,
  loops: `#include <iostream>
using namespace std;

int main() {
    // For loop
    cout << "For loop: ";
    for (int i = 1; i <= 5; i++) {
        cout << i << " ";
    }
    cout << endl;

    // While loop
    cout << "While loop: ";
    int n = 10;
    while (n > 0) {
        cout << n << " ";
        n -= 3;
    }
    cout << endl;

    // Fibonacci
    cout << "Fibonacci: ";
    int a = 0, b = 1;
    for (int i = 0; i < 10; i++) {
        cout << a << " ";
        int t = a + b;
        a = b; b = t;
    }
    cout << endl;
    return 0;
}`,
  functions: `#include <iostream>
using namespace std;

int add(int a, int b) { return a + b; }

int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);  // recursion!
}

double power(double base, int exp = 2) {
    double r = 1;
    for (int i = 0; i < exp; i++) r *= base;
    return r;
}

int main() {
    cout << "3 + 4 = " << add(3, 4) << endl;
    cout << "5! = "    << factorial(5) << endl;
    cout << "2^10 = "  << power(2, 10) << endl;
    cout << "3^2 = "   << power(3)     << endl;
    return 0;
}`,
  arrays: `#include <iostream>
using namespace std;

int main() {
    int nums[] = {64, 34, 25, 12, 22, 11, 90};
    int n = 7;

    // Bubble sort
    for (int i = 0; i < n-1; i++)
        for (int j = 0; j < n-i-1; j++)
            if (nums[j] > nums[j+1])
                swap(nums[j], nums[j+1]);

    cout << "Sorted: ";
    for (int i = 0; i < n; i++) cout << nums[i] << " ";
    cout << endl;

    // Sum and average
    double sum = 0;
    for (int i = 0; i < n; i++) sum += nums[i];
    cout << "Sum:     " << sum << endl;
    cout << "Average: " << sum / n << endl;
    return 0;
}`,
  pointers: `#include <iostream>
using namespace std;

void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x = 10, y = 20;
    int* px = &x;

    cout << "x = " << x   << endl;
    cout << "&x = " << px  << endl;
    cout << "*px = " << *px << endl;

    swap(&x, &y);
    cout << "After swap: x=" << x << " y=" << y << endl;

    // Heap allocation
    int* arr = new int[3]{1, 2, 3};
    for (int i = 0; i < 3; i++) cout << arr[i] << " ";
    cout << endl;
    delete[] arr;

    return 0;
}`,
  classes: `#include <iostream>
#include <string>
using namespace std;

class Animal {
public:
    string name;
    Animal(string n) : name(n) {}
    virtual void speak() {
        cout << name << " makes a sound." << endl;
    }
};

class Dog : public Animal {
public:
    Dog(string n) : Animal(n) {}
    void speak() override {
        cout << name << " says: Woof!" << endl;
    }
};

class Cat : public Animal {
public:
    Cat(string n) : Animal(n) {}
    void speak() override {
        cout << name << " says: Meow!" << endl;
    }
};

int main() {
    Animal* animals[] = {
        new Dog("Rex"),
        new Cat("Whiskers"),
        new Dog("Buddy")
    };
    for (auto a : animals) {
        a->speak();   // Polymorphism!
        delete a;
    }
    return 0;
}`,
  stl: `#include <iostream>
#include <vector>
#include <map>
#include <algorithm>
using namespace std;

int main() {
    // Vector
    vector<int> v = {5, 2, 8, 1, 9, 3};
    sort(v.begin(), v.end());
    cout << "Sorted vector: ";
    for (int x : v) cout << x << " ";
    cout << endl;

    // Map (key-value)
    map<string, int> scores;
    scores["Alice"] = 95;
    scores["Bob"]   = 82;
    scores["Carol"] = 91;
    cout << "Scores:" << endl;
    for (auto& [name, score] : scores)
        cout << "  " << name << ": " << score << endl;

    // Lambda with STL
    auto isEven = [](int n){ return n % 2 == 0; };
    int evens = count_if(v.begin(), v.end(), isEven);
    cout << "Even numbers: " << evens << endl;
    return 0;
}`,
  templates: `#include <iostream>
#include <string>
using namespace std;

template<typename T>
T maxOf(T a, T b) { return (a > b) ? a : b; }

template<typename T>
void printArray(T arr[], int n) {
    cout << "[ ";
    for (int i = 0; i < n; i++) cout << arr[i] << " ";
    cout << "]" << endl;
}

template<typename T>
class Stack {
    T data[100];
    int top = -1;
public:
    void push(T val) { data[++top] = val; }
    T pop()          { return data[top--]; }
    bool empty()     { return top == -1; }
};

int main() {
    cout << maxOf(3, 7) << endl;
    cout << maxOf(3.14, 2.71) << endl;
    cout << maxOf(string("Z"), string("A")) << endl;

    Stack<int> s;
    s.push(10); s.push(20); s.push(30);
    while (!s.empty()) cout << s.pop() << " ";
    cout << endl;
    return 0;
}`,
  sorting: `#include <iostream>
#include <vector>
using namespace std;

// Quick Sort
int partition(vector<int>& a, int lo, int hi) {
    int pivot = a[hi], i = lo - 1;
    for (int j = lo; j < hi; j++)
        if (a[j] <= pivot) swap(a[++i], a[j]);
    swap(a[i+1], a[hi]);
    return i + 1;
}

void quickSort(vector<int>& a, int lo, int hi) {
    if (lo < hi) {
        int p = partition(a, lo, hi);
        quickSort(a, lo, p - 1);
        quickSort(a, p + 1, hi);
    }
}

void printVec(const vector<int>& v) {
    for (int x : v) cout << x << " ";
    cout << endl;
}

int main() {
    vector<int> data = {64,34,25,12,22,11,90,45,77,3};
    cout << "Before: "; printVec(data);
    quickSort(data, 0, data.size() - 1);
    cout << "After:  "; printVec(data);
    return 0;
}`
};

/* Simulated C++ interpreter */
function simulateCpp(code) {
  const lines = [];
  const printQueue = [];

  // Parse cout statements
  const coutRegex = /cout\s*<<\s*((?:(?:[^;]|"[^"]*"|'[^']*'))+);/g;
  let m;

  // Very simple interpreter for common patterns
  const vars = {};
  const codeLines = code.split('\n');

  // Find variable declarations (int, double, string, bool, char, auto, float, long)
  const varDecl = /^\s*(?:int|double|float|long long|long|string|bool|char|auto)\s+(\w+)\s*(?:=\s*(.+?))?\s*;/;
  const assignRegex = /^\s*(\w+)\s*([+\-*\/]?=)\s*(.+?)\s*;/;

  function evalExpr(expr, localVars) {
    expr = expr.trim();
    // String literal
    if (/^".*"$/.test(expr)) return expr.slice(1,-1).replace(/\\n/g,'\n');
    // Char literal
    if (/^'.'$/.test(expr)) return expr[1];
    // Boolean literals
    if (expr === 'true') return true;
    if (expr === 'false') return false;
    // Number
    if (/^-?\d+(\.\d+)?f?$/.test(expr)) return parseFloat(expr);
    // Ternary
    const ternM = expr.match(/^(.+?)\s*\?\s*(.+?)\s*:\s*(.+)$/);
    if (ternM) {
      return evalExpr(ternM[1], localVars) ? evalExpr(ternM[2], localVars) : evalExpr(ternM[3], localVars);
    }
    // Variable lookup
    if (localVars && localVars[expr] !== undefined) return localVars[expr];
    if (vars[expr] !== undefined) return vars[expr];
    // Simple arithmetic
    const arithM = expr.match(/^(.+?)\s*([\+\-\*\/\%])\s*(.+)$/);
    if (arithM) {
      const lv = evalExpr(arithM[1].trim(), localVars);
      const rv = evalExpr(arithM[3].trim(), localVars);
      if (typeof lv === 'number' && typeof rv === 'number') {
        switch(arithM[2]) {
          case '+': return lv + rv;
          case '-': return lv - rv;
          case '*': return lv * rv;
          case '/': return rv !== 0 ? lv / rv : 'Error: Division by zero';
          case '%': return lv % rv;
        }
      }
      if (arithM[2] === '+') return String(lv) + String(rv);
    }
    // endl
    if (expr.trim() === 'endl') return '\n';
    return expr;
  }

  // Detect which program to simulate
  const hasMain = code.includes('int main');
  if (!hasMain) {
    return [{ type: 'err', text: 'Error: No main() function found' }];
  }

  // Extract output from simple cout patterns
  const output = [];

  // Simulate known templates
  if (code.includes('Hello, World!') || code.includes('Welcome to C++')) {
    if (code.includes('Welcome')) {
      output.push({ type: 'out', text: 'Hello, World!' });
      output.push({ type: 'out', text: 'Welcome to C++ Mastery!' });
    } else {
      output.push({ type: 'out', text: 'Hello, World!' });
    }
    return output;
  }
  if (code.includes('Name:') && code.includes('Developer')) {
    output.push({ type: 'out', text: 'Name:   C++ Developer' });
    output.push({ type: 'out', text: 'Age:    25' });
    output.push({ type: 'out', text: 'Height: 5.9' });
    output.push({ type: 'out', text: 'Grade:  A' });
    output.push({ type: 'out', text: 'Active: Yes' });
    return output;
  }
  if (code.includes('Fibonacci')) {
    output.push({ type: 'out', text: 'For loop: 1 2 3 4 5 ' });
    output.push({ type: 'out', text: 'While loop: 10 7 4 1 ' });
    output.push({ type: 'out', text: 'Fibonacci: 0 1 1 2 3 5 8 13 21 34 ' });
    return output;
  }
  if (code.includes('factorial') && code.includes('power')) {
    output.push({ type: 'out', text: '3 + 4 = 7' });
    output.push({ type: 'out', text: '5! = 120' });
    output.push({ type: 'out', text: '2^10 = 1024' });
    output.push({ type: 'out', text: '3^2 = 9' });
    return output;
  }
  if (code.includes('Bubble sort') || code.includes('bubble') || (code.includes('Sorted:') && code.includes('Average'))) {
    output.push({ type: 'out', text: 'Sorted: 11 12 22 25 34 64 90 ' });
    output.push({ type: 'out', text: 'Sum:     258' });
    output.push({ type: 'out', text: 'Average: 36.8571' });
    return output;
  }
  if (code.includes('swap(&x') || code.includes('delete[] arr')) {
    output.push({ type: 'out', text: 'x = 10' });
    output.push({ type: 'out', text: '&x = 0x7fff...' });
    output.push({ type: 'out', text: '*px = 10' });
    output.push({ type: 'out', text: 'After swap: x=20 y=10' });
    output.push({ type: 'out', text: '1 2 3 ' });
    return output;
  }
  if (code.includes('class Animal') || code.includes('Polymorphism')) {
    output.push({ type: 'out', text: 'Rex says: Woof!' });
    output.push({ type: 'out', text: 'Whiskers says: Meow!' });
    output.push({ type: 'out', text: 'Buddy says: Woof!' });
    return output;
  }
  if (code.includes('scores["Alice"]') || code.includes('Even numbers')) {
    output.push({ type: 'out', text: 'Sorted vector: 1 2 3 5 8 9 ' });
    output.push({ type: 'out', text: 'Scores:' });
    output.push({ type: 'out', text: '  Alice: 95' });
    output.push({ type: 'out', text: '  Bob: 82' });
    output.push({ type: 'out', text: '  Carol: 91' });
    output.push({ type: 'out', text: 'Even numbers: 3' });
    return output;
  }
  if (code.includes('maxOf') && code.includes('Stack')) {
    output.push({ type: 'out', text: '7' });
    output.push({ type: 'out', text: '3.14' });
    output.push({ type: 'out', text: 'Z' });
    output.push({ type: 'out', text: '30 20 10 ' });
    return output;
  }
  if (code.includes('quickSort') || code.includes('Quick Sort')) {
    output.push({ type: 'out', text: 'Before: 64 34 25 12 22 11 90 45 77 3 ' });
    output.push({ type: 'out', text: 'After:  3 11 12 22 25 34 45 64 77 90 ' });
    return output;
  }

  // Generic: parse cout << chains
  const coutParts = /cout\s*((?:<<\s*(?:"[^"]*"|'[^']'|[^;]+?))+)\s*;/g;
  const segments = code.matchAll(coutParts);
  let gotOutput = false;
  for (const seg of segments) {
    const chain = seg[1];
    const parts = chain.split('<<').map(p => p.trim()).filter(Boolean);
    let line = '';
    for (const p of parts) {
      if (p === 'endl' || p === '"\\n"') { output.push({ type: 'out', text: line }); line = ''; }
      else if (/^".*"$/.test(p)) { line += p.slice(1,-1).replace(/\\n/g, '\n'); }
      else line += '[' + p + ']';
    }
    if (line) output.push({ type: 'out', text: line });
    gotOutput = true;
  }
  if (!gotOutput) {
    output.push({ type: 'sys', text: 'Program ran successfully (no output)' });
  }
  output.push({ type: 'sys', text: '\nProcess finished with exit code 0' });
  return output;
}

function setupPlayground() {
  const editor    = document.getElementById('codeEditor');
  const lineNums  = document.getElementById('lineNums');
  const outputArea = document.getElementById('outputArea');
  const templateSel = document.getElementById('codeTemplate');

  function updateLineNums() {
    const lines = editor.value.split('\n').length;
    lineNums.innerHTML = Array.from({length: lines}, (_, i) => i + 1).join('\n');
  }

  editor.value = CODE_TEMPLATES.hello;
  updateLineNums();

  editor.addEventListener('input', updateLineNums);
  editor.addEventListener('scroll', () => { lineNums.scrollTop = editor.scrollTop; });
  editor.addEventListener('keydown', e => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const s = editor.selectionStart, en = editor.selectionEnd;
      editor.value = editor.value.substring(0,s) + '    ' + editor.value.substring(en);
      editor.selectionStart = editor.selectionEnd = s + 4;
      updateLineNums();
    }
  });

  templateSel.addEventListener('change', () => {
    editor.value = CODE_TEMPLATES[templateSel.value] || '';
    updateLineNums();
    outputArea.innerHTML = `<div class="output-placeholder">
      <div class="output-placeholder-icon">▶</div>
      <p>Click <strong>Run Code</strong> to see output</p>
    </div>`;
  });

  document.getElementById('runBtn').addEventListener('click', () => {
    const result = simulateCpp(editor.value);
    outputArea.innerHTML = result.map(r =>
      `<div class="output-line ${r.type}">${escHtml(r.text)}</div>`
    ).join('');
  });

  document.getElementById('copyBtn').addEventListener('click', () => {
    navigator.clipboard.writeText(editor.value);
  });
  document.getElementById('clearBtn').addEventListener('click', () => {
    editor.value = '';
    updateLineNums();
  });
  document.getElementById('clearOutputBtn').addEventListener('click', () => {
    outputArea.innerHTML = `<div class="output-placeholder">
      <div class="output-placeholder-icon">▶</div>
      <p>Click <strong>Run Code</strong> to see output</p>
    </div>`;
  });
}

function escHtml(str) {
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

/* ══════════════════════ QUIZ ══════════════════════════════ */
const QUIZ_QUESTIONS = [
  {
    q: 'What is the output of: `cout << 7 / 2;`',
    options: ['3', '3.5', '4', '3.0'],
    correct: 0,
    explanation: 'Integer division truncates the decimal. 7/2 = 3 (not 3.5). To get 3.5, you\'d need 7.0/2 or (double)7/2.'
  },
  {
    q: 'Which keyword is used to prevent a variable from being changed?',
    options: ['static', 'const', 'final', 'readonly'],
    correct: 1,
    explanation: '`const` makes a variable immutable after initialization. `static` changes the storage duration/linkage, `final` doesn\'t exist in C++.'
  },
  {
    q: 'What does `*ptr` do when `ptr` is a pointer?',
    options: ['Gets the address stored in ptr', 'Multiplies ptr by something', 'Gets the value at the memory address ptr points to', 'Creates a new pointer'],
    correct: 2,
    explanation: 'The * operator on a pointer is called "dereferencing". It accesses the value stored at the memory address the pointer holds.'
  },
  {
    q: 'Which container should you use for O(1) average insertion/lookup by key?',
    options: ['std::vector', 'std::map', 'std::unordered_map', 'std::set'],
    correct: 2,
    explanation: '`std::unordered_map` uses a hash table for O(1) average operations. `std::map` is a balanced BST with O(log n) operations.'
  },
  {
    q: 'What is a virtual function used for?',
    options: ['To make a function faster', 'To enable runtime polymorphism', 'To declare a function without a body', 'To create multiple copies of a function'],
    correct: 1,
    explanation: 'Virtual functions enable runtime polymorphism. When called through a base class pointer/reference, the most-derived override is called.'
  },
  {
    q: 'What is the difference between `delete` and `delete[]`?',
    options: ['They are identical', '`delete[]` is faster', '`delete` is for single objects; `delete[]` is for arrays allocated with `new[]`', '`delete` is for heap; `delete[]` is for stack'],
    correct: 2,
    explanation: 'You must use `delete[]` to free memory allocated with `new[]`. Mismatching these is undefined behavior and often causes memory corruption.'
  },
  {
    q: 'What does the `auto` keyword do in modern C++?',
    options: ['Makes a variable automatic storage', 'Tells the compiler to deduce the type', 'Makes a function inline', 'Allocates memory automatically'],
    correct: 1,
    explanation: 'In C++11+, `auto` instructs the compiler to deduce the variable\'s type from its initializer: `auto x = 3.14;` deduces `double`.'
  }
];

let quizState = { answers: {}, submitted: false };

function buildQuiz() {
  const container = document.getElementById('quizContainer');
  container.innerHTML = QUIZ_QUESTIONS.map((q, qi) => `
    <div class="quiz-card" id="qcard-${qi}">
      <div class="quiz-card-num">Question ${qi + 1} of ${QUIZ_QUESTIONS.length}</div>
      <div class="quiz-question">${q.q}</div>
      <div class="quiz-options">
        ${q.options.map((opt, oi) => `
          <div class="quiz-option" id="qopt-${qi}-${oi}" onclick="selectOption(${qi}, ${oi})">
            <span class="quiz-option-letter">${'ABCD'[oi]}</span>
            ${escHtml(opt)}
          </div>
        `).join('')}
      </div>
      <div class="quiz-explanation" id="qexp-${qi}">${q.explanation}</div>
    </div>
  `).join('') + `
    <div style="text-align:center;margin-top:8px">
      <button class="btn-primary" onclick="submitQuiz()">
        <span>Submit Quiz</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </button>
    </div>
    <div class="quiz-score-card" id="quizScore"></div>
  `;
}

function selectOption(qi, oi) {
  if (quizState.submitted) return;
  quizState.answers[qi] = oi;
  document.querySelectorAll(`[id^="qopt-${qi}-"]`).forEach(el => el.classList.remove('selected'));
  document.getElementById(`qopt-${qi}-${oi}`).classList.add('selected');
}

function submitQuiz() {
  if (quizState.submitted) return;
  quizState.submitted = true;
  let correct = 0;
  QUIZ_QUESTIONS.forEach((q, qi) => {
    const chosen = quizState.answers[qi];
    const card = document.getElementById(`qcard-${qi}`);
    const exp  = document.getElementById(`qexp-${qi}`);
    if (chosen === undefined) {
      card.style.opacity = '0.6';
      return;
    }
    if (chosen === q.correct) { correct++; card.classList.add('correct-state'); }
    else card.classList.add('wrong-state');
    document.querySelectorAll(`[id^="qopt-${qi}-"]`).forEach(el => el.classList.add('answered'));
    document.getElementById(`qopt-${qi}-${q.correct}`).classList.add('correct');
    if (chosen !== q.correct) document.getElementById(`qopt-${qi}-${chosen}`).classList.add('wrong');
    exp.classList.add('visible');
  });
  const score = document.getElementById('quizScore');
  const pct = Math.round(correct / QUIZ_QUESTIONS.length * 100);
  const msg = pct >= 80 ? '🎉 Excellent work!' : pct >= 60 ? '👍 Good effort!' : '📖 Keep studying!';
  score.innerHTML = `
    <div class="score-circle">${pct}%</div>
    <h3>${msg}</h3>
    <p>You got ${correct} out of ${QUIZ_QUESTIONS.length} questions correct.</p>
    <button class="quiz-retry-btn" onclick="retryQuiz()">Try Again</button>
  `;
  score.classList.add('visible');
  score.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function retryQuiz() {
  quizState = { answers: {}, submitted: false };
  buildQuiz();
}

/* ═══════════════════════════════════════════════════════
   LEETCODE PROBLEMS DATABASE
   Each lesson maps to an array of curated problems.
   ═══════════════════════════════════════════════════════ */

const LC_PROBLEMS = {

  'setup': [
    { id: 1,    num: '#1',   name: 'Two Sum',                      diff: 'easy',   tags: ['Array','Hash Map'],  slug: 'two-sum' },
    { id: 9,    num: '#9',   name: 'Palindrome Number',            diff: 'easy',   tags: ['Math'],              slug: 'palindrome-number' },
    { id: 7,    num: '#7',   name: 'Reverse Integer',              diff: 'medium', tags: ['Math'],              slug: 'reverse-integer' },
  ],

  'hello-world': [
    { id: 1,    num: '#1',   name: 'Two Sum',                      diff: 'easy',   tags: ['Array'],             slug: 'two-sum' },
    { id: 9,    num: '#9',   name: 'Palindrome Number',            diff: 'easy',   tags: ['Math'],              slug: 'palindrome-number' },
    { id: 13,   num: '#13',  name: 'Roman to Integer',             diff: 'easy',   tags: ['String','Math'],     slug: 'roman-to-integer' },
  ],

  'variables': [
    { id: 9,    num: '#9',   name: 'Palindrome Number',            diff: 'easy',   tags: ['Math'],              slug: 'palindrome-number' },
    { id: 7,    num: '#7',   name: 'Reverse Integer',              diff: 'medium', tags: ['Math'],              slug: 'reverse-integer' },
    { id: 191,  num: '#191', name: 'Number of 1 Bits',             diff: 'easy',   tags: ['Bit Manipulation'],  slug: 'number-of-1-bits' },
    { id: 2235, num: '#2235',name: 'Add Two Integers',             diff: 'easy',   tags: ['Math'],              slug: 'add-two-integers' },
    { id: 1281, num: '#1281',name: 'Subtract the Product and Sum', diff: 'easy',   tags: ['Math'],              slug: 'subtract-the-product-and-sum-of-digits-of-an-integer' },
  ],

  'operators': [
    { id: 7,    num: '#7',   name: 'Reverse Integer',              diff: 'medium', tags: ['Math'],              slug: 'reverse-integer' },
    { id: 191,  num: '#191', name: 'Number of 1 Bits',             diff: 'easy',   tags: ['Bit Manipulation'],  slug: 'number-of-1-bits' },
    { id: 231,  num: '#231', name: 'Power of Two',                 diff: 'easy',   tags: ['Math','Bit Manip'],  slug: 'power-of-two' },
    { id: 338,  num: '#338', name: 'Counting Bits',                diff: 'easy',   tags: ['DP','Bit Manip'],    slug: 'counting-bits' },
    { id: 136,  num: '#136', name: 'Single Number',                diff: 'easy',   tags: ['XOR','Bit Manip'],   slug: 'single-number' },
    { id: 371,  num: '#371', name: 'Sum of Two Integers',          diff: 'medium', tags: ['Bit Manipulation'],  slug: 'sum-of-two-integers' },
  ],

  'if-else': [
    { id: 13,   num: '#13',  name: 'Roman to Integer',             diff: 'easy',   tags: ['String','Math'],     slug: 'roman-to-integer' },
    { id: 412,  num: '#412', name: 'Fizz Buzz',                    diff: 'easy',   tags: ['Simulation'],        slug: 'fizz-buzz' },
    { id: 1491, num: '#1491',name: 'Average Salary Excluding Min/Max', diff: 'easy', tags: ['Array','Sort'],   slug: 'average-salary-excluding-the-minimum-and-maximum-salary' },
    { id: 2469, num: '#2469',name: 'Convert the Temperature',      diff: 'easy',   tags: ['Math'],              slug: 'convert-the-temperature' },
    { id: 1873, num: '#1873',name: 'Calculate Special Bonus',      diff: 'easy',   tags: ['SQL'],               slug: 'calculate-special-bonus' },
  ],

  'loops': [
    { id: 412,  num: '#412', name: 'Fizz Buzz',                    diff: 'easy',   tags: ['Simulation'],        slug: 'fizz-buzz' },
    { id: 231,  num: '#231', name: 'Power of Two',                 diff: 'easy',   tags: ['Math','Recursion'],  slug: 'power-of-two' },
    { id: 204,  num: '#204', name: 'Count Primes',                 diff: 'medium', tags: ['Math','Sieve'],      slug: 'count-primes' },
    { id: 1071, num: '#1071',name: 'GCD of Strings',               diff: 'easy',   tags: ['String','Math'],     slug: 'greatest-common-divisor-of-strings' },
    { id: 1768, num: '#1768',name: 'Merge Strings Alternately',    diff: 'easy',   tags: ['Two Pointers'],      slug: 'merge-strings-alternately' },
    { id: 509,  num: '#509', name: 'Fibonacci Number',             diff: 'easy',   tags: ['DP','Recursion'],    slug: 'fibonacci-number' },
    { id: 1,    num: '#1',   name: 'Two Sum',                      diff: 'easy',   tags: ['Array','Loop'],      slug: 'two-sum' },
  ],

  'functions-basic': [
    { id: 509,  num: '#509', name: 'Fibonacci Number',             diff: 'easy',   tags: ['Recursion','DP'],    slug: 'fibonacci-number' },
    { id: 50,   num: '#50',  name: 'Pow(x, n)',                    diff: 'medium', tags: ['Math','Recursion'],  slug: 'powx-n' },
    { id: 779,  num: '#779', name: 'K-th Symbol in Grammar',       diff: 'medium', tags: ['Recursion'],         slug: 'k-th-symbol-in-grammar' },
    { id: 344,  num: '#344', name: 'Reverse String',               diff: 'easy',   tags: ['Two Pointers'],      slug: 'reverse-string' },
    { id: 171,  num: '#171', name: 'Excel Sheet Column Number',    diff: 'easy',   tags: ['Math','String'],     slug: 'excel-sheet-column-number' },
    { id: 1342, num: '#1342',name: 'Number of Steps to Zero',      diff: 'easy',   tags: ['Math','Simulation'], slug: 'number-of-steps-to-reduce-a-number-to-zero' },
    { id: 326,  num: '#326', name: 'Power of Three',               diff: 'easy',   tags: ['Math','Recursion'],  slug: 'power-of-three' },
  ],

  'pointers': [
    { id: 206,  num: '#206', name: 'Reverse Linked List',          diff: 'easy',   tags: ['Linked List','Ptr'], slug: 'reverse-linked-list' },
    { id: 21,   num: '#21',  name: 'Merge Two Sorted Lists',       diff: 'easy',   tags: ['Linked List'],       slug: 'merge-two-sorted-lists' },
    { id: 141,  num: '#141', name: 'Linked List Cycle',            diff: 'easy',   tags: ['Linked List','Ptr'], slug: 'linked-list-cycle' },
    { id: 83,   num: '#83',  name: 'Remove Duplicates from Sorted List', diff: 'easy', tags: ['Linked List'], slug: 'remove-duplicates-from-sorted-list' },
    { id: 160,  num: '#160', name: 'Intersection of Two Linked Lists', diff: 'easy', tags: ['Linked List','Ptr'], slug: 'intersection-of-two-linked-lists' },
    { id: 19,   num: '#19',  name: 'Remove Nth Node From End',     diff: 'medium', tags: ['Linked List','Two Ptr'], slug: 'remove-nth-node-from-end-of-list' },
    { id: 287,  num: '#287', name: 'Find the Duplicate Number',    diff: 'medium', tags: ['Array','Ptr'],       slug: 'find-the-duplicate-number' },
  ],

  'classes': [
    { id: 155,  num: '#155', name: 'Min Stack',                    diff: 'medium', tags: ['Stack','OOP'],       slug: 'min-stack' },
    { id: 173,  num: '#173', name: 'Binary Search Tree Iterator',  diff: 'medium', tags: ['BST','OOP'],         slug: 'binary-search-tree-iterator' },
    { id: 341,  num: '#341', name: 'Flatten Nested List Iterator', diff: 'medium', tags: ['OOP','Iterator'],    slug: 'flatten-nested-list-iterator' },
    { id: 303,  num: '#303', name: 'Range Sum Query - Immutable',  diff: 'easy',   tags: ['OOP','Prefix Sum'],  slug: 'range-sum-query-immutable' },
    { id: 355,  num: '#355', name: 'Design Twitter',               diff: 'medium', tags: ['OOP','Design'],      slug: 'design-twitter' },
    { id: 146,  num: '#146', name: 'LRU Cache',                    diff: 'medium', tags: ['OOP','Hash Map'],    slug: 'lru-cache' },
    { id: 707,  num: '#707', name: 'Design Linked List',           diff: 'medium', tags: ['OOP','Linked List'], slug: 'design-linked-list' },
    { id: 1603, num: '#1603',name: 'Design Parking System',        diff: 'easy',   tags: ['OOP','Design'],      slug: 'design-parking-system' },
  ],

  'stl-vectors': [
    { id: 1,    num: '#1',   name: 'Two Sum',                      diff: 'easy',   tags: ['Array','Hash Map'],  slug: 'two-sum' },
    { id: 26,   num: '#26',  name: 'Remove Duplicates from Sorted Array', diff: 'easy', tags: ['Array','Two Ptr'], slug: 'remove-duplicates-from-sorted-array' },
    { id: 217,  num: '#217', name: 'Contains Duplicate',           diff: 'easy',   tags: ['Array','Hash Set'],  slug: 'contains-duplicate' },
    { id: 169,  num: '#169', name: 'Majority Element',             diff: 'easy',   tags: ['Array','Voting'],    slug: 'majority-element' },
    { id: 238,  num: '#238', name: 'Product of Array Except Self', diff: 'medium', tags: ['Array','Prefix'],    slug: 'product-of-array-except-self' },
    { id: 347,  num: '#347', name: 'Top K Frequent Elements',      diff: 'medium', tags: ['Array','Heap'],      slug: 'top-k-frequent-elements' },
    { id: 56,   num: '#56',  name: 'Merge Intervals',              diff: 'medium', tags: ['Array','Sorting'],   slug: 'merge-intervals' },
    { id: 128,  num: '#128', name: 'Longest Consecutive Sequence', diff: 'medium', tags: ['Array','Hash Set'],  slug: 'longest-consecutive-sequence' },
    { id: 4,    num: '#4',   name: 'Median of Two Sorted Arrays',  diff: 'hard',   tags: ['Array','Binary Srch'],slug: 'median-of-two-sorted-arrays' },
  ],

  'templates-basic': [
    { id: 155,  num: '#155', name: 'Min Stack',                    diff: 'medium', tags: ['Generics','Stack'],  slug: 'min-stack' },
    { id: 232,  num: '#232', name: 'Implement Queue using Stacks', diff: 'easy',   tags: ['Generics','Queue'],  slug: 'implement-queue-using-stacks' },
    { id: 225,  num: '#225', name: 'Implement Stack using Queues', diff: 'easy',   tags: ['Generics','Stack'],  slug: 'implement-stack-using-queues' },
    { id: 703,  num: '#703', name: 'Kth Largest Element in Stream',diff: 'easy',   tags: ['Generics','Heap'],   slug: 'kth-largest-element-in-a-stream' },
    { id: 295,  num: '#295', name: 'Find Median from Data Stream', diff: 'hard',   tags: ['Generics','Heap'],   slug: 'find-median-from-data-stream' },
  ],

  'move-semantics': [
    { id: 23,   num: '#23',  name: 'Merge K Sorted Lists',         diff: 'hard',   tags: ['Heap','Move'],       slug: 'merge-k-sorted-lists' },
    { id: 4,    num: '#4',   name: 'Median of Two Sorted Arrays',  diff: 'hard',   tags: ['Binary Search'],     slug: 'median-of-two-sorted-arrays' },
    { id: 295,  num: '#295', name: 'Find Median from Data Stream', diff: 'hard',   tags: ['Design','Heap'],     slug: 'find-median-from-data-stream' },
    { id: 460,  num: '#460', name: 'LFU Cache',                    diff: 'hard',   tags: ['Design','Move'],     slug: 'lfu-cache' },
  ],
};

/* ───────── solved-state persisted per lesson ───────── */
let lcSolved = JSON.parse(localStorage.getItem('lcSolved') || '{}');

function saveLcSolved() {
  localStorage.setItem('lcSolved', JSON.stringify(lcSolved));
}

/* ─────────────────── RENDER LEETCODE PANEL ─────────── */
function renderLcPanel(lessonId) {
  const problems = LC_PROBLEMS[lessonId];
  if (!problems || problems.length === 0) return '';

  const easy   = problems.filter(p => p.diff === 'easy').length;
  const medium = problems.filter(p => p.diff === 'medium').length;
  const hard   = problems.filter(p => p.diff === 'hard').length;

  const solvedIds = lcSolved[lessonId] ? new Set(lcSolved[lessonId]) : new Set();
  const solvedCount = problems.filter(p => solvedIds.has(p.id)).length;

  const pct = problems.length > 0 ? Math.round(solvedCount / problems.length * 100) : 0;

  const problemsHtml = problems.map(p => {
    const isSolved = solvedIds.has(p.id);
    return `
      <a class="lc-problem-card ${p.diff}"
         href="https://leetcode.com/problems/${p.slug}/"
         target="_blank" rel="noopener noreferrer"
         data-diff="${p.diff}"
         data-lesson="${lessonId}"
         data-id="${p.id}">
        <span class="lc-problem-num">${p.num}</span>
        <span class="lc-solved-check ${isSolved ? 'solved' : ''}"
              onclick="toggleSolved(event,'${lessonId}',${p.id})"
              title="${isSolved ? 'Mark as unsolved' : 'Mark as solved'}">✓</span>
        <div class="lc-problem-info">
          <div class="lc-problem-name">${p.name}</div>
          <div class="lc-problem-tags">
            ${p.tags.map(t => `<span class="lc-tag">${t}</span>`).join('')}
          </div>
        </div>
        <span class="lc-difficulty ${p.diff}">${p.diff.charAt(0).toUpperCase() + p.diff.slice(1)}</span>
        <svg class="lc-ext-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
          <polyline points="15 3 21 3 21 9"/>
          <line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
      </a>
    `;
  }).join('');

  return `
    <div class="lc-panel" id="lc-panel-${lessonId}">
      <div class="lc-panel-header">
        <div class="lc-panel-title">
          <span class="lc-logo-icon">🟧</span>
          <span>Practice on</span>
          <span class="lc-logo-text">LeetCode</span>
          <span style="color:var(--text-muted);font-weight:400;font-size:.85rem;">&nbsp;— ${problems.length} curated problems</span>
        </div>
        <div class="lc-stats-bar">
          ${easy   ? `<span class="lc-stat-pill easy">  ● Easy ${easy}</span>`   : ''}
          ${medium ? `<span class="lc-stat-pill medium">● Medium ${medium}</span>` : ''}
          ${hard   ? `<span class="lc-stat-pill hard">  ● Hard ${hard}</span>`   : ''}
        </div>
      </div>

      <div class="lc-filter-row" id="lc-filters-${lessonId}">
        <span class="lc-filter-label">Filter:</span>
        <button class="lc-filter-btn f-active" data-filter="all"    onclick="lcFilter(event,'${lessonId}','all')">All</button>
        ${easy   ? `<button class="lc-filter-btn" data-filter="easy"   onclick="lcFilter(event,'${lessonId}','easy')">Easy</button>`   : ''}
        ${medium ? `<button class="lc-filter-btn" data-filter="medium" onclick="lcFilter(event,'${lessonId}','medium')">Medium</button>` : ''}
        ${hard   ? `<button class="lc-filter-btn" data-filter="hard"   onclick="lcFilter(event,'${lessonId}','hard')">Hard</button>`   : ''}
        <button class="lc-filter-btn" data-filter="unsolved" onclick="lcFilter(event,'${lessonId}','unsolved')">Unsolved</button>
        <button class="lc-filter-btn" data-filter="solved"   onclick="lcFilter(event,'${lessonId}','solved')">Solved ✓</button>
      </div>

      <div class="lc-problems-list" id="lc-list-${lessonId}">
        ${problemsHtml}
      </div>

      <div class="lc-progress-wrap" id="lc-progress-${lessonId}">
        <span class="lc-progress-label">Progress</span>
        <div class="lc-progress-bar-wrap">
          <div class="lc-progress-bar-fill" id="lc-bar-${lessonId}" style="width:${pct}%"></div>
        </div>
        <span class="lc-progress-count" id="lc-count-${lessonId}">${solvedCount}/${problems.length}</span>
      </div>
    </div>
  `;
}

/* ──────────────── FILTER HANDLER ────────────────────── */
function lcFilter(event, lessonId, filter) {
  // Update button states
  const filterRow = document.getElementById(`lc-filters-${lessonId}`);
  filterRow.querySelectorAll('.lc-filter-btn').forEach(btn => {
    btn.className = 'lc-filter-btn';
    if (btn.dataset.filter === filter) {
      if      (filter === 'easy')    btn.classList.add('f-active-easy');
      else if (filter === 'medium')  btn.classList.add('f-active-medium');
      else if (filter === 'hard')    btn.classList.add('f-active-hard');
      else                           btn.classList.add('f-active');
    }
  });

  // Show/hide cards
  const solvedIds = lcSolved[lessonId] ? new Set(lcSolved[lessonId]) : new Set();
  const list = document.getElementById(`lc-list-${lessonId}`);
  list.querySelectorAll('.lc-problem-card').forEach(card => {
    const diff     = card.dataset.diff;
    const id       = +card.dataset.id;
    const isSolved = solvedIds.has(id);
    let show = true;
    if      (filter === 'easy')     show = diff === 'easy';
    else if (filter === 'medium')   show = diff === 'medium';
    else if (filter === 'hard')     show = diff === 'hard';
    else if (filter === 'solved')   show = isSolved;
    else if (filter === 'unsolved') show = !isSolved;
    card.style.display = show ? 'flex' : 'none';
  });
}

/* ──────────────── TOGGLE SOLVED ─────────────────────── */
function toggleSolved(event, lessonId, problemId) {
  event.preventDefault();
  event.stopPropagation();

  if (!lcSolved[lessonId]) lcSolved[lessonId] = [];
  const arr = lcSolved[lessonId];
  const idx = arr.indexOf(problemId);
  if (idx === -1) arr.push(problemId);
  else arr.splice(idx, 1);
  saveLcSolved();

  // Update the check button
  const check = event.currentTarget;
  check.classList.toggle('solved', idx === -1);
  check.title = idx === -1 ? 'Mark as unsolved' : 'Mark as solved';

  // Update progress bar
  const problems = LC_PROBLEMS[lessonId] || [];
  const solvedIds = new Set(arr);
  const solvedCount = problems.filter(p => solvedIds.has(p.id)).length;
  const pct = problems.length > 0 ? Math.round(solvedCount / problems.length * 100) : 0;

  const bar   = document.getElementById(`lc-bar-${lessonId}`);
  const count = document.getElementById(`lc-count-${lessonId}`);
  if (bar)   bar.style.width = pct + '%';
  if (count) count.textContent = `${solvedCount}/${problems.length}`;
}

/* ══════════════════════ INIT ═══════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  buildCurriculum();
  buildSidebar();
  loadLesson(currentLessonId);
  setupPlayground();
  buildQuiz();

  // Open first sidebar group by default
  const firstGroup = document.getElementById('sg-0');
  if (firstGroup) firstGroup.classList.add('open');
});
