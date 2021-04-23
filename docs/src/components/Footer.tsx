import React, { useState } from "react";
import { Container, Row, ListGroup, Modal, Button, OverlayTrigger, Tooltip, Col } from "react-bootstrap";
import { Clipboard, Github, Linkedin } from "react-bootstrap-icons";
import QRCode from "qrcode.react";

import "../styles/footer.scss";

import Monero from "../images/cryptoIcons/xmr.svg";
import Bitcoin from "../images/cryptoIcons/btc.svg";
import BitcoinCash from "../images/cryptoIcons/bch.svg";
import Tezos from "../images/cryptoIcons/xtz.svg";
import Polkadot from "../images/cryptoIcons/dot.svg";
import Ethereum from "../images/cryptoIcons/eth.svg";
// import Cardano from '../images/cryptoIcons/ada.svg';
import Doge from "../images/cryptoIcons/doge.svg";

type Currency = [string, string, string];

function TextWithCopyButton(props: { children: string }) {
  const handleClick: any = (event: MouseEvent) => {
    navigator.clipboard.writeText(props.children);
  };
  const tooltip = <Tooltip id={props.children}>Copied!</Tooltip>;

  return (
    <>
      <OverlayTrigger overlay={tooltip} trigger='click' placement="top">
        <Button
            variant="outline-primary"
            className="fixButton"
            onClick={handleClick}
        >
            <Clipboard className="mr-2" />
            Copy Address
        </Button>
      </OverlayTrigger>
    </>
  );
}

function CurrencyButton(props: { currency: Currency }) {
  const [state, setState] = useState(false);
  const openModal = () => setState(true);
  const closeModal = (event: React.MouseEvent<HTMLElement, Event>) => {
    setState(false);
    event.stopPropagation();
  }

  return (
    <ListGroup.Item key={props.currency[0]} className="bg-dark" action onClick={openModal}>
      <Row
        className="align-items-center text-white"
      >
        <img
          src={props.currency[1]}
          className="img-fluid mr-2"
          style={{ height: "2.3em" }}
        />
        <span>{props.currency[0]}</span>
      </Row>
      <Modal show={state} centered>
        <Modal.Body>
          <Row className="justify-content-center m-3">
            <QRCode
              size={256}
              value={props.currency[2]}
              imageSettings={{ src: props.currency[1] }}
            />
          </Row>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
        <TextWithCopyButton>{props.currency[2]}</TextWithCopyButton>
          <Button
            variant="outline-primary"
            className="fixButton"
            onClick={closeModal}
          >
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </ListGroup.Item>
  );
}

function TipMe() {
  const wallets: Array<Currency> = [
    ["Bitcoin", Bitcoin, "bitcoin:bc1qpkjmd0ephtgsghfkknkauu7vvxj3m4sdv0crfh"],
    [
      "Monero",
      Monero,
      "45STyFZjXsh8CFRQFX79B6MnN5LhQE5eNBSWs1Lj83ju4LEFZ6hKvUoaNX3aW6t4GN2Lz2Ay7LsRkNWE5VgMqtvr5NBTCH4",
    ],
    ["Ethereum", Ethereum, "0xeD85Fc8a9b3fbEEbd8f894086e4C38F1728e36F4"],
    ["Dogecoin", Doge, "dogecoin:DUB5xcqwZNuvoYM61yU4DYJ4qSfZkHogGa"],
    [
      "Bitcoin Cash",
      BitcoinCash,
      "bitcoincash:qqle95nwgf659zgarwn7l9m8f79y42nyjswl5g330n",
    ],
    // ['Cardano', Cardano, ''],
    ["Tezos", Tezos, "tz1YrubvKiZfpnEqbJu1RSHLgFQw6oxbHTSi"],
    ["Polkadot", Polkadot, "12eYy4Zf6cxXWtei5YAYxR4SyqxfRgcJcq9GHHUFuZ1hK7RP"],
  ];

  return (
    <Container className="text-white m-3">
      <h3 className="m-2 mb-4">Pay me a Coffee:</h3>
      <ListGroup variant="flush">
        {wallets.map((currency) => {
          return (
            <CurrencyButton currency={currency} />
          );
        })}
      </ListGroup>
    </Container>
  );
}

function UsefulLinks() {
  return (
    <div className="text-white m-3">
      <h3 className="m-2 mb-4">Useful Links</h3>
      <ListGroup variant="flush">
        <ListGroup.Item className="bg-dark" action>
          <Button variant="plain" href="https://github.com/reclusivebox/nnloader" className="text-white d-flex flex-row align-items-baseline">
            <Github className="mr-2" />
            Contribute on Github
          </Button>
        </ListGroup.Item>
        <ListGroup.Item className="bg-dark" action>
          <Button variant="plain" href="https://www.linkedin.com/in/bruno-greg%C3%B3rio-694390175/" className="text-white d-flex flex-row align-items-baseline">
            <Linkedin className="mr-2" />
            Follow me on Linkedin
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default function Footer() {
  return (
    <Container fluid className="bg-dark p-lg-5 p-3">
      <Row>
        <Col lg={6}>
          <TipMe />
        </Col>
        <Col lg={6}>
          <UsefulLinks />
        </Col>
      </Row>
    </Container>
  );
}
