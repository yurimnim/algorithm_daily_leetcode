/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) return null;
    const root = { val:preorder[0], left:null, right:null };
    const mid = inorder.indexOf(preorder[0]);
    
  
    root.left = buildTree(preorder.slice(1, mid+1), inorder.slice(0,mid));
    root.right = buildTree(preorder.slice(mid+1), inorder.slice(mid+1));   
    
      return root;
};