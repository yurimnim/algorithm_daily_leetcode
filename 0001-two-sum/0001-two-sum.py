class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        map = {}
        for index, elem in enumerate(nums):
            map[elem] = index
        for index, elem in enumerate(nums):
            if map.get(target - elem, None):
                if map[target - elem] != index:
                    return [index, map[target - elem]]
        return []