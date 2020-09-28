import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Opacity = () => {
    const data = useStaticQuery(graphql`
        query OpacityQuery {
            designTokensJson(name: { eq: "$opacities" }) {
                name
                mapValue {
                    name
                    compiledValue
                }
            }
        }
    `)

    const Name = data.designTokensJson.name
    const TokenName = Name.substring(1)
    const Title = {
        textTransform: "capitalize",
        marginTop: "80px",
        lineHeight: "1",
    }

    return (
        <section>
            <h3 style={Title}>{TokenName}</h3>
            <p>Description.</p>

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    marginBottom: "-40px",
                    width: "100%",
                    marginLeft: "-30px",
                    width: "calc(100% + 80px)",
                }}
            >
                {data.designTokensJson.mapValue.map(node => (
                    <figure
                        style={{
                            margin: "0 50px 10px 30px",
                            minWidth: "280px",
                            maxWidth: "280px",
                        }}
                    >
                        <div
                            style={{
                                borderRadius: "4px",
                                border: "2px solid #000013",
                                boxShadow: "rgba(0, 0, 0, 0.1) 0 4px 6px 0",
                            }}
                        >
                            <div
                                style={{
                                    height: "120px",
                                    width: "100%",
                                    backgroundColor: "#000013",
                                    borderRadius: "1px",
                                    opacity: `${node.compiledValue}`,
                                }}
                            ></div>
                        </div>
                        <figcaption
                            style={{
                                color: "#000013",
                                fontSize: "1.125rem",
                                fontWeight: "700",
                                textAlign: "left",
                                padding: "1rem 0 2.5rem",
                            }}
                        >
                            opacity({node.name})
                        </figcaption>
                    </figure>
                ))}
            </div>

            <table
                className="docblock-argstable css-6hhrgj"
                style={{ textAlign: "left" }}
            >
                <thead className="docblock-argstable-head">
                    <tr>
                        <th>Token</th>
                        <th>Value</th>
                        <th>Default</th>
                        <th style={{ width: "50% !important" }}>Use</th>
                    </tr>
                </thead>
                <tbody className="docblock-argstable-body">
                    {data.designTokensJson.mapValue.map(node => (
                        <tr>
                            <td className="css-4lbn0a">
                                <span className="css-in3yi3">
                                    opacity({node.name})
                                </span>
                            </td>
                            <td>
                                <div className="css-1521b8c">
                                    <span>{node.compiledValue}</span>
                                </div>
                                <div className="css-fimcbu"></div>
                            </td>
                            <td style={{ width: "0" }}>
                                <span>-</span>
                            </td>
                            <td style={{ width: "50% !important" }}>
                                <pre style={{ margin: 0 }}>
                                    <code>
                                        opacity: opacity(
                                        {node.name});
                                    </code>
                                </pre>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default Opacity
