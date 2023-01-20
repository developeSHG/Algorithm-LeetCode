/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let maxDepth = 0;
    
    const dfs = (root, curDepth) => {
        if (!root)
            return;
        
        maxDepth = Math.max(maxDepth, curDepth);
        
        dfs(root.left, curDepth + 1);
        dfs(root.right, curDepth + 1);
    };
    
    dfs(root, 1);
    
    return maxDepth;
};
