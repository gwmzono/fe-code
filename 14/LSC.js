//Longest Common Subsequence
//动态规划
export function LSC(str1, str2){
  let dp = [];
  const m = str1.length;
  const n = str2.length;
  for(let i = 0; i <= m; i++){
    for(let j = 0; j <= n; j++){
      if(!dp[i]){
        dp[i] = [];
      }
      //其一指针为0
      if(i === 0 || j === 0){
        dp[i][j] = '';
        continue;
      }
      
      //i和j位置的元素相等
      if(str1[i-1] === str2[j-1]){
        dp[i][j] = dp[i-1][j-1].concat(str1[i-1]);
        continue;
      }
      
      //i和j位置不等
      if(dp[i-1][j].length > dp[i][j-1].length){
        dp[i][j] = dp[i-1][j];
      }else{
        dp[i][j] = dp[i][j-1];
      }
    }
  }
  return dp[m][n];
}