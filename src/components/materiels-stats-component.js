import React, {Component} from 'react';
import {
    PieChart,
    Pie,
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Bar,
} from "recharts";




    const MaterielsStats = () => {
        const data1 = [
            { name: "Materiels Disponibles", materielsa: 3 },
            { name: "Materiels Indisponibles", materielsa: 4 },
        ];
        const data2=[
            {name:"Materiels en Panne",materielsb:2},
            {name:"Materiels en Marche",materielsb:2}
        ]
        //Design
//  TODO Materiels en entree
//  TODO Materiel Design
//  TODO Materiels empruntee/ non empruntee
//  TODO Migration base vers mongo online
        return (
            <div style={{ textAlign: "center" }}>
                <h1>Liste des materiels</h1>
                <div className="App">
                    <PieChart width={400} height={400}>
                        <Pie
                            dataKey="materielsa"
                            isAnimationActive={false}
                            data={data1}
                            cx={200}
                            cy={200}
                            outerRadius={80}
                            fill="#8884d8"
                            label
                        />
                        <Tooltip />
                    </PieChart>
                    <PieChart width={400} height={400}>
                        <Pie
                            dataKey="materielsb"
                            isAnimationActive={false}
                            data={data2}
                            cx={200}
                            cy={200}
                            outerRadius={80}
                            fill="#8884d8"
                            label
                        />
                        <Tooltip />
                    </PieChart><PieChart width={400} height={400}>
                        <Pie
                            dataKey="materielsb"
                            isAnimationActive={false}
                            data={data2}
                            cx={200}
                            cy={200}
                            outerRadius={80}
                            fill="#8884d8"
                            label
                        />
                        <Tooltip />
                    </PieChart>

                </div>
            </div>
        );
    };


export default MaterielsStats;
