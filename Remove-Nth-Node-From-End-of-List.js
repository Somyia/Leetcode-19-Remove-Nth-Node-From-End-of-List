/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
    let data = head;
    let i=0;
    let now=head;
    
    if(data.next==null) return head.val=null
     while(data){
         
         i++;
         data=data.next;
     }
    if(i==n) return head.next;

   let p=i-n;
    let m=1;
    
    while(now && now.next){
        if(m==p) break;
        m++;
        now=now.next;           
}
        
  now.next=now.next.next;           
    
    return head ;
};
