import Graph from "./Graph";
import * as React from "react";
import {DataSet, Node as VisNode, Edge as VisEdge, Network} from 'vis';

interface GraphContainerProps {
    nodes: Node[];
    edges: Edge[];
}

function mapDomainNodesToVisNodes(nodes: Node[]): VisNode[] {
    return nodes.map(n => {
        return {id: Number(n.id), label: n.label}})
}
function mapDomainEdgesToVisEdges(edges: Edge[]): VisEdge[] {
    return edges.map((e, i) => {
        return {id: i, from: Number(e.head), to: Number(e.tail), label: e.label}
    })
}

export default function GraphContainer({edges, nodes}: GraphContainerProps) {
    console.log({edges, nodes})

    const visNodes = new DataSet<Node>(mapDomainNodesToVisNodes(nodes));

    // Create a DataSet for edges
    const visEdges = new DataSet<Edge>(mapDomainEdgesToVisEdges(edges));

    console.log(visNodes, visEdges)

    const networkOptions = {
        layout: {
            randomSeed: 42,
            hierarchical: {
                enabled: false,
                sortMethod: 'directed'
            },
        },
        interaction: {
            dragNodes: true, // Disable dragging nodes
            dragView: true, // Disable dragging the view
            zoomView: true, // Disable zooming the view
            selectable: true, // Disable selecting nodes
            multiselect: true, // Disable selecting multiple nodes
            hover: true, // Disable hovering over nodes
        },
        manipulation: {
            enabled: false
        },
        physics: {
            barnesHut: {
                springLength: 300, // The rest length of the spring, it can also be a string. For example '10%'
                springConstant: 0.00004, // The spring constant for the springs, it can also be a string. For example '10%'
                damping: 1.0, // The damping of the spring.
                centralGravity: 0.02, // The force that pulls all nodes towards the center of gravity of the network.
            },
        },
        edges: {
            arrows: {
                to: {
                    enabled: true,
                    scaleFactor: 0.5
                }
            }
        }
    };
    //TODO remove
    const showcase = false
    return (
        <>
            {
                !showcase && <Graph nodes={visNodes} edges={visEdges} networkOptions={networkOptions}/>
            }
            {
                showcase && <Graph nodes={filteredNodeSet} edges={filteredEdges} networkOptions={networkOptions}/>
            }
        </>

    )
}





const rel_id = {"P6": "head of government", "P17": "country", "P19": "place of birth", "P20": "place of death", "P22": "father", "P25": "mother", "P26": "spouse", "P27": "country of citizenship", "P30": "continent", "P31": "instance of", "P35": "head of state", "P36": "capital", "P37": "official language", "P39": "position held", "P40": "child", "P50": "author", "P54": "member of sports team", "P57": "director", "P58": "screenwriter", "P69": "educated at", "P86": "composer", "P102": "member of political party", "P108": "employer", "P112": "founded by", "P118": "league", "P123": "publisher", "P127": "owned by", "P131": "located in the administrative territorial entity", "P136": "genre", "P137": "operator", "P140": "religion", "P150": "contains administrative territorial entity", "P155": "follows", "P156": "followed by", "P159": "headquarters location", "P161": "cast member", "P162": "producer", "P166": "award received", "P170": "creator", "P171": "parent taxon", "P172": "ethnic group", "P175": "performer", "P176": "manufacturer", "P178": "developer", "P179": "series", "P190": "sister city", "P194": "legislative body", "P205": "basin country", "P206": "located in or next to body of water", "P241": "military branch", "P264": "record label", "P272": "production company", "P276": "location", "P279": "subclass of", "P355": "subsidiary", "P361": "part of", "P364": "original language of work", "P400": "platform", "P403": "mouth of the watercourse", "P449": "original network", "P463": "member of", "P488": "chairperson", "P495": "country of origin", "P527": "has part", "P551": "residence", "P569": "date of birth", "P570": "date of death", "P571": "inception", "P576": "dissolved, abolished or demolished", "P577": "publication date", "P580": "start time", "P582": "end time", "P585": "point in time", "P607": "conflict", "P674": "characters", "P676": "lyrics by", "P706": "located on terrain feature", "P710": "participant", "P737": "influenced by", "P740": "location of formation", "P749": "parent organization", "P800": "notable work", "P807": "separated from", "P840": "narrative location", "P937": "work location", "P1001": "applies to jurisdiction", "P1056": "product or material produced", "P1198": "unemployment rate", "P1336": "territory claimed by", "P1344": "participant of", "P1365": "replaces", "P1366": "replaced by", "P1376": "capital of", "P1412": "languages spoken, written or signed", "P1441": "present in work", "P3373": "sibling"}


// Input JSON
const json = {"vertexSet": [[{"pos": [0, 4], "type": "ORG", "sent_id": 0, "name": "Zest Airways, Inc."}, {"sent_id": 0, "type": "ORG", "pos": [10, 15], "name": "Asian Spirit and Zest Air"}, {"name": "AirAsia Zest", "pos": [6, 8], "sent_id": 0, "type": "ORG"}, {"name": "AirAsia Zest", "pos": [19, 21], "sent_id": 6, "type": "ORG"}], [{"name": "Ninoy Aquino International Airport", "pos": [4, 8], "sent_id": 3, "type": "LOC"}, {"name": "Ninoy Aquino International Airport", "pos": [26, 30], "sent_id": 0, "type": "LOC"}], [{"name": "Pasay City", "pos": [31, 33], "sent_id": 0, "type": "LOC"}], [{"name": "Metro Manila", "pos": [34, 36], "sent_id": 0, "type": "LOC"}], [{"name": "Philippines", "pos": [38, 39], "sent_id": 0, "type": "LOC"}, {"name": "Philippines", "pos": [13, 14], "sent_id": 4, "type": "LOC"}, {"sent_id": 5, "type": "LOC", "pos": [25, 29], "name": "Republic of the Philippines"}], [{"name": "Manila", "pos": [13, 14], "sent_id": 1, "type": "LOC"}, {"name": "Manila", "pos": [9, 10], "sent_id": 3, "type": "LOC"}], [{"name": "Cebu", "pos": [15, 16], "sent_id": 1, "type": "LOC"}], [{"pos": [17, 18], "type": "NUM", "sent_id": 1, "name": "24"}], [{"pos": [1, 2], "type": "TIME", "sent_id": 2, "name": "2013"}, {"pos": [1, 5], "type": "TIME", "sent_id": 5, "name": "August 16, 2013"}], [{"pos": [9, 11], "type": "ORG", "name": "Philippines AirAsia", "sent_id": 2}], [{"pos": [5, 7], "type": "ORG", "sent_id": 4, "name": "Asian Spirit"}], [{"pos": [7, 13], "type": "ORG", "sent_id": 5, "name": "Civil Aviation Authority of the Philippines"}, {"name": "CAAP", "pos": [14, 15], "sent_id": 5, "type": "ORG"}], [{"name": "Zest Air", "pos": [34, 36], "sent_id": 5, "type": "ORG"}, {"pos": [7, 9], "type": "ORG", "sent_id": 6, "name": "Zest Air"}], [{"sent_id": 6, "type": "NUM", "pos": [2, 4], "name": "a year"}], [{"name": "AirAsia", "pos": [5, 6], "sent_id": 6, "type": "ORG"}], [{"pos": [5, 7], "type": "ORG", "name": "AirAsia Philippines", "sent_id": 7}], [{"pos": [8, 10], "type": "TIME", "sent_id": 7, "name": "January 2016"}]], "labels": [{"r": "P159", "h": 0, "t": 2, "evidence": [0]}, {"r": "P17", "h": 0, "t": 4, "evidence": [2, 4, 7]}, {"r": "P17", "h": 12, "t": 4, "evidence": [6, 7]}, {"r": "P17", "h": 2, "t": 4, "evidence": [0]}, {"r": "P131", "h": 2, "t": 3, "evidence": [0]}, {"r": "P150", "h": 4, "t": 3, "evidence": [0]}, {"r": "P17", "h": 5, "t": 4, "evidence": [0, 3]}, {"r": "P150", "h": 3, "t": 2, "evidence": [0]}, {"r": "P131", "h": 3, "t": 4, "evidence": [0, 3]}, {"r": "P17", "h": 3, "t": 4, "evidence": [0, 3]}, {"r": "P131", "h": 1, "t": 2, "evidence": [0, 3]}, {"r": "P17", "h": 1, "t": 4, "evidence": [0, 3]}, {"r": "P17", "h": 10, "t": 4, "evidence": [4]}], "title": "AirAsia Zest", "sents": [["Zest", "Airways", ",", "Inc.", "operated", "as", "AirAsia", "Zest", "(", "formerly", "Asian", "Spirit", "and", "Zest", "Air", ")", ",", "was", "a", "low", "-", "cost", "airline", "based", "at", "the", "Ninoy", "Aquino", "International", "Airport", "in", "Pasay", "City", ",", "Metro", "Manila", "in", "the", "Philippines", "."], ["It", "operated", "scheduled", "domestic", "and", "international", "tourist", "services", ",", "mainly", "feeder", "services", "linking", "Manila", "and", "Cebu", "with", "24", "domestic", "destinations", "in", "support", "of", "the", "trunk", "route", "operations", "of", "other", "airlines", "."], ["In", "2013", ",", "the", "airline", "became", "an", "affiliate", "of", "Philippines", "AirAsia", "operating", "their", "brand", "separately", "."], ["Its", "main", "base", "was", "Ninoy", "Aquino", "International", "Airport", ",", "Manila", "."], ["The", "airline", "was", "founded", "as", "Asian", "Spirit", ",", "the", "first", "airline", "in", "the", "Philippines", "to", "be", "run", "as", "a", "cooperative", "."], ["On", "August", "16", ",", "2013", ",", "the", "Civil", "Aviation", "Authority", "of", "the", "Philippines", "(", "CAAP", ")", ",", "the", "regulating", "body", "of", "the", "Government", "of", "the", "Republic", "of", "the", "Philippines", "for", "civil", "aviation", ",", "suspended", "Zest", "Air", "flights", "until", "further", "notice", "because", "of", "safety", "issues", "."], ["Less", "than", "a", "year", "after", "AirAsia", "and", "Zest", "Air", "'s", "strategic", "alliance", ",", "the", "airline", "has", "been", "rebranded", "as", "AirAsia", "Zest", "."], ["The", "airline", "was", "merged", "into", "AirAsia", "Philippines", "in", "January", "2016", "."]]};

// Function to get the first mention name from an entity
function getFirstMentionName(entity) {
    return entity[0].name;
}

// Create a DataSet for nodes
const nodes = new DataSet([
    // Extract and map the entity nodes
    ...json.vertexSet.map((entity, index) => ({
        id: index,
        label: getFirstMentionName(entity)
    }))
    // // Extract and map the relation nodes
    // ...json.labels.map((relation, index) => ({
    //     id: json.vertexSet.length + index,
    //     label: relation.r
    // }))
]);

// Create a DataSet for edges
const edges = new DataSet([
    // Extract and map the edges between entities and relations
    ...json.labels.map((relation, index) => ({
        id: index,
        from: relation.h,
        to: relation.t,
        label: mapToRelationName(relation.r),
    }))
]);



function mapToRelationName(rel_short: string): string {
    return rel_id[rel_short]
}

// Filter nodes that have at least one outgoing or incoming edge
const filteredNodes = nodes.get().filter((node) => {
    const connectedEdges = edges.get({
        filter: (edge) => edge.from === node.id || edge.to === node.id
    });
    return connectedEdges.length > 0;
});

// Create a new DataSet for filtered nodes
const filteredNodeSet = new DataSet(filteredNodes);

// Create a new DataSet for filtered edges
const filteredEdgeSet = edges.get().filter((edge) => {
    return filteredNodeSet.get(edge.from) !== null && filteredNodeSet.get(edge.to) !== null;
});
const filteredEdges = new DataSet(filteredEdgeSet);
