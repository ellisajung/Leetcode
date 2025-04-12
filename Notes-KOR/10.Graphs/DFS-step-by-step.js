/* 
Recursive DFS & Matrix

call stack (step by step!)
// 하나의 재귀호출은 해당 재귀호출이 base case에 도달할 때까지 계속됨

(0, 3) ->return 0(out of bound)  
(0, 2)                          
(0, 1)                          
(0, 0)                          

(0, 1) ->return 0(visited)   
(0, 2)                      
(0, 1)                      
(0, 0)                      

(1, 2)                          
(0, 2)                          
(0, 1)                          
(0, 0)                          

(1, 3) ->return 0(out of bound)  
(1, 2)                          
(0, 2)                          
(0, 1)                          
(0, 0)                          

(1, 1) 
(1, 2)
(0, 2)
(0, 1)
(0, 0)

(1, 2) ->return 0(visited)
(1, 1) 
(1, 2)
(0, 2)
(0, 1)
(0, 0)

(1, 0) ->return 0(blocked)
(1, 1) 
(1, 2)
(0, 2)
(0, 1)
(0, 0)

*(2, 1)
(1, 1) 
(1, 2)
(0, 2)
(0, 1)
(0, 0)

(2, 2) ->return 1
*(2, 1)
(1, 1) 
(1, 2)
(0, 2)
(0, 1)
(0, 0)

(2, 0) ->return 0(blocked)
*(2, 1)
(1, 1) 
(1, 2)
(0, 2)
(0, 1)
(0, 0)

(3, 1) ->return 0(out of bound)
*(2, 1)
(1, 1) 
(1, 2)
(0, 2)
(0, 1)
(0, 0)

(1, 1) ->return 0(visited)
*(2, 1)
(1, 1) 
(1, 2)
(0, 2)
(0, 1)
(0, 0)

*(2, 1) visit=0, count=1+0+0+0=1
(1, 1) 
(1, 2)
(0, 2)
(0, 1)
(0, 0)

(0, 1) ->return 0(visited)
(1, 1) 
(1, 2)
(0, 2)
(0, 1)
(0, 0)

(1, 1) visit=0, count=0+0+1+0=1
(1, 2)
(0, 2)
(0, 1)
(0, 0)

(2, 2) ->return 1
(1, 2)
(0, 2)
(0, 1)
(0, 0)

(0, 2) ->return 0(visited)
(1, 2)
(0, 2)
(0, 1)
(0, 0)

(1, 2) visit=0, count=0+1+1+0=2
(0, 2)
(0, 1)
(0, 0)

(-1, 2) ->return 0(out of bound)
(0, 2)
(0, 1)
(0, 0)

(0, 2) visit=0, count=0+0+2+0=2
(0, 1)
(0, 0)

(0, 0) ->return 0(visited)
(0, 1)
(0, 0)

(1, 1)
(0, 1)
(0, 0)

(1, 2) 
(1, 1)
(0, 1)
(0, 0)

(1, 3) ->return 0(out of bound)
(1, 2) 
(1, 1)
(0, 1)
(0, 0)

(1, 1) ->return 0(visited)
(1, 2) 
(1, 1)
(0, 1)
(0, 0)

(2, 2) ->return 1
(1, 2) 
(1, 1)
(0, 1)
(0, 0)

(0, 2) 
(1, 2) 
(1, 1)
(0, 1)
(0, 0)

(0, 3) ->return 0(out of bound)
(0, 2) 
(1, 2) 
(1, 1)
(0, 1)
(0, 0)

(0, 1) ->return 0(visited)
(0, 2) 
(1, 2) 
(1, 1)
(0, 1)
(0, 0)

(1, 2) ->return 0(visited)
(0, 2) 
(1, 2) 
(1, 1)
(0, 1)
(0, 0)

(-1, 2) ->return 0(out of bound)
(0, 2) 
(1, 2) 
(1, 1)
(0, 1)
(0, 0)

(0, 2) visit=0, count=0+0+0+0=0 
(1, 2) 
(1, 1)
(0, 1)
(0, 0)

(1, 2) visit=0, count=0+0+1+0=1 
(1, 1)
(0, 1)
(0, 0)

(1, 0) ->return 0(blocked)
(1, 1)
(0, 1)
(0, 0)

(2, 1)
(1, 1)
(0, 1)
(0, 0)

(2, 2) ->return 1
(2, 1)
(1, 1)
(0, 1)
(0, 0)

(2, 0) ->return 0(blocked)
(2, 1)
(1, 1)
(0, 1)
(0, 0)

(3, 1) ->return 0(out of bound)
(2, 1)
(1, 1)
(0, 1)
(0, 0)

(1, 1) ->return 0(visited)
(2, 1)
(1, 1)
(0, 1)
(0, 0)

(2, 1) visit=0, count=1+0+0+0=1
(1, 1)
(0, 1)
(0, 0)

(0, 1) ->return 0(visited)
(1, 1)
(0, 1)
(0, 0)

(1, 1) visit=0, count=1+0+1+0=2
(0, 1)
(0, 0)

(-1, 1) ->return 0(out of bound)
(0, 1)
(0, 0)

(0, 1) visit=0, count=2+0+2+0=4
(0, 0)

(0, -1) ->return 0(out of bound)
(0, 0)

(1, 0) ->return 0(blocked)
(0, 0)

(-1, 0) ->return 0(out of bound)
(0, 0)

(0, 0) visit=0, count=4+0+0+0=4

return count // 4


*/
