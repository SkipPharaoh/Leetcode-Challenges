```
There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.

Example 1:


Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]

Example 2:

Input: heights = [[2,1],[1,2]]
Output: [[0,0],[0,1],[1,0],[1,1]]
```

// 1st Method // incomplete
const pacificAtlantic = function(heights) {
    let result = [];
    let pacific = [];
    let atlantic = [];
    let m = heights.length;
    let n = heights[0].length;
    let visited = [];
    let dfs = function(i, j, pacific, atlantic) {
        if (i < 0 || i >= m || j < 0 || j >= n || heights[i][j] === 0 || visited[i][j]) {
            return;
        }
        visited[i][j] = true;
        pacific.push([i, j]);
        atlantic.push([i, j]);
        dfs(i + 1, j, pacific, atlantic);
        dfs(i - 1, j, pacific, atlantic);
        dfs(i, j + 1, pacific, atlantic);
        dfs(i, j - 1, pacific, atlantic);
    }
    for (let i = 0; i < m; i++) {
        visited[i] = [];
        for (let j = 0; j < n; j++) {
            visited[i][j] = false;
        }
    }
    for (let i = 0; i < m; i++) {
        dfs(i, 0, pacific, atlantic);
        dfs(i, n - 1, pacific, atlantic);
    }
    for (let j = 0; j < n; j++) {
        dfs(0, j, pacific, atlantic);
        dfs(m - 1, j, pacific, atlantic);
    }
    for (let i = 0; i < pacific.length; i++) {
        result.push(pacific[i]);
    }
    for (let i = 0; i < atlantic.length; i++) {
        result.push(atlantic[i]);
    }
    return result;
};



