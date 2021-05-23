# Graphs
A Graph is a set of nodes (vertices) along with a set of direct connections (edges) between nodes

# A graph can be represented in 2 formats:

1. Adjacency matrix -> It is a square matrix with n rows and columns, where n is the number of nodes. It takes up more space, usually, and insertion and removal of a node takes up more time. The only thing it does faster is getting the connection between 2 nodes.
2. Adjacency List -> It is a list of nodes, where each node has a list of connections going from that node. It takes up lesser space, and inserting and removing vertices also takes up lesser time. It take a bit more time comparatively, to find out if there is an edge between two nodes.

# Directed/Weighted graphs
There can be different types of graphs depending upon the type of edge that the graph has:
1. Undirected graph: Here, the edges between vertices do not have any direction (are always two directional). This means that if we have an edge between node A and B, we can go from A to B and also from B to A.

2. Directed graph: Here, the edges between vertices have a direction (are always one directional). This means that if we have an edge between node A and B (pointing from A to B), we can go from A to B, but not from B to A. To go from B to A, we would need another edge from B to A.

3. Non-weighted graph: In this graph, all the edges have the same cost of traversal (or the same weight).

4. Weighted graph: Here, the edges between vertices have a cost associated to them. It can be monetary or time cost or any other conceivable value. For example, in maps, we can have an edge between A and B that has value 20. There is also an edge between A and C of weight 10, and an edge between C and B of weight 7.
Now, we can go from A to B directly, which would weigh 20; or we can go from A -> C -> B which would weigh 17 (10+7). So, even if there is a direct connection, it is more efficient to go via C if we want to go from A to B.

There are 4 possible combinations based on these graph type:
1. Undirected & Non-weighted
2. Undirected & Weighted
3. Directed & Non-weighted
4. Directed & Weighted

# Use cases of graphs
Graphs have many real life use cases:
1. Social networking representation.
2. Suggestions like friend suggestions on facebook, or movie/series suggestion on Netflix.
3. Network routing.
4. Advertising content based on preferences.