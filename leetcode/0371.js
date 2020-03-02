//sum-of-two-integers
//不可以用+ -

// m+n
export function test(m,n){
  if(n === 0){
    return m;
  }
  if(m === 0){
    return n;
  }
  return test(m^n, (m&n)<<1);
}

// m-n
export function reduce(m,n){
  return test(m,~n+1);
}