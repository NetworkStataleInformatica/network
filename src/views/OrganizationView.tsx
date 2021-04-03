import React from 'react';
import { Icon, Link } from 'office-ui-fabric-react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import { FontSizes, FontWeights } from '@fluentui/theme';
import { Card, ICardTokens } from "@uifabric/react-cards";
import { useTheme } from '@fluentui/react-theme-provider';
import { Text, ITextStyles } from 'office-ui-fabric-react';

const cardTokens: ICardTokens = { childrenMargin: 12 };
const sectionCard = {
    minHeight: '120px',
    height: '100%',
    width: '100%',
    maxWidth: 'none',
    maxHeight: 'none'
};

const helpfulTextStyles: ITextStyles = { root: { fontWeight: FontWeights.regular } };

const CAN = [
    { name: "Silvio Settembrese", delega: "Gestore Discord" },
    { name: "Mattia Oldani", delega: "" },
    { name: "Laura Luperto", delega: "Gestrice Discord" },
    { name: "Gabriele Sarti", delega: "" },
    { name: "Fabrizio Brioni", delega: "" }
];

const OrganizationView = () => {
    var theme = useTheme();
    const iconStyle = { color: theme.palette.themePrimary, fontSize: FontSizes.size24 };

    return (
        <Container className="organization text-center">
            
            <div className="mb-2">
                <h5 style={{fontWeight: 400}} className="mb-2">
                    Siamo un'organizzazione senza fini di lucro, apolitica, ovvero apartitica, e neutrale, la quale si pone l'obiettivo di offrire servizi telematici agli studenti dell'Università degli Studi di Milano.
                </h5>

                <h6 style={{fontWeight: 400}} className="mb-2">
                    <p className="mb-0">Puoi trovare il nostro statuto cliccando <Link href="https://github.com/StudentiUniMi/docs/blob/main/statuto.md" target="_blank">qui</Link>.</p>
                    Di seguito è possibile trovare i membri che hanno un ruolo attivo nel network e i relativi contatti.
                </h6>
            </div>

            <Icon iconName="ChevronDownMed" className="mb-1" style={iconStyle} />

            <div className="mb-4">
                <h5 className="mb-3">Coordinatore</h5>

                <div style={{marginLeft: 'auto', marginRight: 'auto', maxWidth: '230px'}} className="mb-4">
                    <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                        <Card.Section>
                            <div className="justify-content-center">
                                {/* pic of persona */}
                            </div>
                            <h6 className="mb-0">Marco Aceti</h6>
                            <Text variant="medium" styles={helpfulTextStyles}>
                                
                            </Text>
                        </Card.Section>
                    </Card>
                </div>

                <h5 className="mb-3">Comitato Amministrativo Network</h5>

                <Row className="justify-content-center">
                    {
                        CAN.map(x => { return (
                            <Col className="mb-3" xl={3} lg={3} md={4} sm={6} xs={12}>
                                <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                                    <Card.Section>
                                        <div className="justify-content-center">
                                            {/* pic of persona */}
                                        </div>
                                        <h6 className="mb-0">{x.name}</h6>
                                        <Text variant="medium" styles={helpfulTextStyles}>
                                            {x.delega}
                                        </Text>
                                    </Card.Section>
                                </Card>
                            </Col>
                        )})
                    }
                </Row>
                

                <h5 className="mb-3">Amministratori</h5>

                <h5 className="mb-3">Moderatori</h5>
            </div>
        </Container>
    )
};

export default OrganizationView;