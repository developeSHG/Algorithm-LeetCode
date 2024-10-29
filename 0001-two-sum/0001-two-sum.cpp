
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> m;
        
        for (int i = 0; i < nums.size(); ++i)
            m.insert({nums[i], i});
        
        for (int i = 0; i < nums.size(); ++i)
        {
            int n = target - nums[i];
            if (m.find(n) != m.end() && i != m[n]) return { i, m[n] };
        } 
        return {0, 0};
    }
};