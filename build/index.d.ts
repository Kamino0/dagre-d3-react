import React, { Component } from 'react';
interface GraphProps {
    nodes: d3Node[];
    links: d3Link[];
    zoomable?: boolean;
    fitBoundaries?: boolean;
    height?: string;
    width?: string;
    rankdir?: rankdir;
    animate?: number;
    className?: string;
    shape?: shapes;
    curve?: any;
    onNodeClick: Function;
    onNodeRightClick: Function;
    onNodeDoubleClick: Function;
    onRelationshipClick: Function;
    onRelationshipDoubleClick: Function;
    onRelationshipRightClick: Function;
}
declare type rankdir = 'TB' | 'BT' | 'LR' | 'RL';
declare type shapes = 'rect' | 'circle' | 'ellipse';
declare type labelType = 'html' | 'svg' | 'string';
declare type d3Node = {
    id: any;
    label: string;
    class?: string;
    labelType?: labelType;
};
declare type d3Link = {
    source: string;
    target: string;
    class?: string;
    label?: string;
};
declare class DagreGraph extends Component<GraphProps> {
    svg: React.RefObject<SVGSVGElement>;
    innerG: React.RefObject<SVGSVGElement>;
    static defaultProps: {
        rankdir: string;
        zoomable: boolean;
        fitBoundaries: boolean;
        className: string;
    };
    componentDidMount(): void;
    componentDidUpdate(): void;
    _getNodeData(id: any): d3Node | undefined;
    _drawChart: () => void;
    render(): JSX.Element;
}
export default DagreGraph;
