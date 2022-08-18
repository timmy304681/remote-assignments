# Assignment 5: Algorithm Practice (Advanced Optional)
Remember what we did in Assignment 1? We created a function that can find the position of the target number inside an array of numbers. Actually, if the array was Sorted already, there is a beautiful algorithm called Binary Search which can do this job efficiently. You can try to look up these keywords and learn the concept behind this algorithm. If you still have time, you can try implementing it yourself.
For simplicity, you can assume that there are no duplicate numbers in the given array. It will be a challenge if you haven’t learned any algorithm before.

====
# Binary Search
二分搜尋演算法（英語：binary search algorithm），也稱折半搜尋演算法（英語：half-interval search algorithm)、對數搜尋演算法（英語：logarithmic search algorithm），是一種在有序陣列中搜尋某一特定元素的搜尋演算法。搜尋過程從陣列的中間元素開始，如果中間元素正好是要搜尋的元素，則搜尋過程結束；如果某一特定元素大於或者小於中間元素，則在陣列大於或小於中間元素的那一半中搜尋，而且跟開始一樣從中間元素開始比較。如果在某一步驟陣列為空，則代表找不到。這種搜尋演算法每一次比較都使搜尋範圍縮小一半。 (維基百科)

Binary Search Tree 具有以下特徵：
- 每個 parent node 最多只有兩個 children nodes，且每一個 node 的值都不重複
- 左側每個 children nodes 的值都小於它的 parent node 的值
- 右側每個 children nodes 的值都大於它的 parent node 的值
