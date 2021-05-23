// NOTE: This graph is made using an adjacency list. Since it takes up
// lesser space than adjacency matrix, and also because most of the real world applications
// represent graphs in an adjacency list format.

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


g.removeEdge("Tokyo", "Los Angeles");
g.removeVertex("Tokyo");