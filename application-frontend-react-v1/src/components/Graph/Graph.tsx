import * as React from 'react';
import { useEffect, useRef } from 'react';
import { DataSet, Node, Edge, Network, Options } from 'vis';

interface GraphProps {
    nodes: DataSet<Node>;
    edges: DataSet<Edge>;
    networkOptions: Options;
}

const Graph: React.FC<GraphProps> = ({ nodes, edges, networkOptions }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const networkRef = useRef<Network | null>(null);

    useEffect(() => {
        if (containerRef.current) {
            const container = containerRef.current;

            // Create a new network instance with the provided networkOptions
            const network = new Network(container, { nodes, edges }, networkOptions);

            // Store the network instance for later use
            networkRef.current = network;

            // Clean up the network instance on unmount
            return () => {
                network.destroy();
                networkRef.current = null;
            };
        }
    }, [nodes, edges, networkOptions]);

    return <div ref={containerRef} style={{ height: '100%' }} />;
};

export default Graph;
