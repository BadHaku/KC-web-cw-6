alert("مرحباً بك في موقعي الذي سيحسب درجتك!!");

let grade = prompt("اكتب درجتك بالارقام");

console.log(grade);


if (grade >= 90) {
    console.log('%cلقد حصلت على امتياز 🥳 ', 'background: #222; color: #00ff08');
} else if (grade >= 80) {
    console.log('%cلقد حصلت على جيد جداً🤩 ', 'background: #222; color: #99ff00');
} else if (grade >= 70) {
    console.log('%cلقد حصلت على جيد🙂 ', 'background: #222; color: #f6ff00');
} else if (grade >= 60) {
    console.log('%cلقد حصلت على مقبول😕 ', 'background: #222; color: #ffa600');
} else if (grade >= 50) {
    console.log('%cلقد حصلت على ضعيف☹️ ', 'background: #222; color: #ff5900');
} else {
    console.log('%cرسبت💔 ', 'background: #222; color: #ff0000');
} 



// جافا سكريبت ليست جافا //