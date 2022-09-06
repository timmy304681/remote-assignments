function delayedResultPromise(n1, n2, delayTime) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(n1 + n2), delayTime);
    //setTimeout(() => console.log(n1 + n2), delayTime);
  });
}

delayedResultPromise(4, 5, 3000).then(console.log);
// 9 (4+5) will be shown in the console after 3 seconds

async function main() {
  // your code here, you should call delayedResultPromise here and get the result using async/await.
  console.log(await delayedResultPromise(4, 5, 3000));
}

main(); // result will be shown in the console after <delayTime> seconds

/*** 
 * Test
我們起初應該是預期要依序執行此兩行，但是事實上第一行的promise會延遲才回傳，反而第二行會先
也因此await就是為了解決此promise，能讓其完成執行結束後才進行下一個指令
***/

function test_wrong() {
  delayedResultPromise(1, 2, 4000).then(console.log);
  console.log("Finish!");
}
test_wrong();

async function test_correct() {
  console.log(await delayedResultPromise(1, 2, 4000));
  console.log("Finish!");
}
test_correct();
