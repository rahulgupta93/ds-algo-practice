class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    removeVertex(vertex) {
        //  Remove all edges from other vertices to this vertex.
        while(this.adjacencyList[vertex].length) {
            const v = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, v);
        }
        // delete the vertex itself from graph
        delete this.adjacencyList[vertex];
    }
    addEdge(vertex1, vertex2) {
        // Add connection from vertex 1 to vertex 2
        this.adjacencyList[vertex1].push(vertex2);
        // Add connection from vertex 2 to vertex 1
        this.adjacencyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1, vertex2) {
        // Remove connection from vertex 1 to vertex 2
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        // Remove connection from vertex 1 to vertex 2
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }

    // recursive depth first traversal of a graph
    DFSRecursive(startVertex) {
        const visited = {};
        const results = [];
        const bfs = (vertex) => {
            if (!vertex || !!visited[vertex]) return;
            results.push(vertex);
            visited[vertex] = true;
            this.adjacencyList[vertex].forEach(v => bfs(v));
        }
        bfs(startVertex);
        return results;
    }

    // Iterative depth first traversal of a graph using a stack
    // Gives a different order from recursive since in recursive we
    // start visiting the edges array from start to end, but here we do a stack pop,
    // therefore we visit in order of end to start
    DFSIterative(start) {
        const visited = {};
        const results = [];
        const stack = [];
        stack.push(start);
        while(stack.length) {
            const vertex = stack.pop();
            if (!visited[vertex]) {
                results.push(vertex);
                visited[vertex] = true;
                stack.push(...this.adjacencyList[vertex]);
            }
        }
        return results;
    }

    // Breadth First Search
    BFS(start) {
        const visited = {};
        const results = [];
        const queue = [];
        queue.push(start);
        while(queue.length) {
            const vertex = queue.shift();
            if (!visited[vertex]) {
                results.push(vertex);
                visited[vertex] = true;
                queue.push(...this.adjacencyList[vertex]);
            }
        }
        return results;
    }

}

const g = new Graph();

g.addVertex("Tokyo");
g.addVertex("Los Angeles");
g.addVertex("New York");
g.addVertex("San Francisco");
g.addVertex("Las Vegas");
g.addVertex("Paris");

g.addEdge("Tokyo", "Paris");
g.addEdge("Tokyo", "New York");
g.addEdge("Tokyo", "Los Angeles");
g.addEdge("Los Angeles", "New York");
g.addEdge("Los Angeles", "San Francisco");
g.addEdge("San Francisco", "New York");
g.addEdge("Las Vegas", "New York");
g.addEdge("Las Vegas", "Los Angeles");
g.addEdge("Paris", "New York");
g.addEdge("Paris", "Los Angeles");
g.addEdge("Paris", "San Francisco");