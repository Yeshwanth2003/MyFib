function fib(n){
  let x=0;
  let x1=1;
  
  for(let i=0;i<=n-2;i++){
    let c=x1;
    x1+=x;
    x=c;
  }
  return x1
}
 console.log(fib(2));
