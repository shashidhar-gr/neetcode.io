var removeDuplicates = function(nums) {
    let reader = 0, writer = 0;
    while(reader < nums.length) {
        if(nums[reader] != nums[writer]) {
            let temp = nums[reader];
            nums[reader] = nums[writer + 1];
            nums[writer + 1] = temp;
            writer++;
        }
        reader++;
    }
    return writer + 1;
}

const nums = [0,0,1,1,1,2,2,3,3,4];
//const nums = [0, 1];
const res = removeDuplicates(nums);
console.log(res);