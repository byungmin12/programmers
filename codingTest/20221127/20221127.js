// 컬링함수를 사용하여 문자열을 결합하는 방법//// 문제// 컬링이 몇개 연결되어있는 지 모른다고 가정했을 때 문자열이 undefined라면 그 동안 들어온 모든 문자열을 연결하여 출력function curry(...args) {  		function merge (...args){        	return args.reduce((acc,cur)=>acc+" "+cur)        }      return function(a,...args2) {          if(a===undefined){              return merge.apply(this,args)          }        return curry.apply(this, args.concat(a));      }}curry("test")("done")()