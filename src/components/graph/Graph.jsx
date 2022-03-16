import React, { useState,useRef,useEffect } from 'react';
// import ReactDOM from 'react-dom';
import G6 from '@antv/g6';

let graph = null;

const Graph = () => {
    const [data, setData] = useState({
        nodes: [
            { id: "node1", label: "1" },
            { id: "node2", label: "2" },
        ],
        edges: [],
    });

    const ref = useRef(null);

    useEffect(() => {
        if (!graph) {
            graph = new G6.Graph({
                container: 'mountNode',
                width: 1000,
                height: 600,
                layout: {
                    type: 'dagre',
                    rankdir: 'LR', // The center of the graph by default
                    align: 'DL',
                    nodesep: 20,
                    ranksep: 50,
                    controlPoints: false,
                },
            //     container: ref.current,
            //     width: 1200,
            //     height: 900,
            //     modes: {
            //         default: ["drag-canvas", "zoom-canvas", "drag-node"],
            //     },
            });
        }

        graph.data(data);
        graph.render();

        return () => {
            graph.changeData(data);
        };
    }, [data]);

    const handleClick = () => {
        setData({
            nodes: [
                { id: "node1", label: "1" },
                { id: "node2", label: "2" },
            ],
            // edges: [{ source: "node1", target: "node2" }],
        });
    };
    return (
        <div>
            <button onClick={handleClick}>changeData</button>
            <div ref={ref}></div>
        </div>
    );
};

export default Graph;