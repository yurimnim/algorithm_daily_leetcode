/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

//재귀함수 Inorder Traversal
const inorderTraversal=(root: TreeNode | null): number[] =>{
    const result:number[] = [];
    
    // Inorder:왼->root->오
    const traverse = (node: TreeNode|null) => {
        if(node === null) return; 
        traverse(node.left);
        result.push(node.val);
        traverse(node.right);
    }
    
    traverse(root);
    
    return result;
};