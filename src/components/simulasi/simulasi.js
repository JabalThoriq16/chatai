import React from "react";
import {Image, Grid } from "react-vant";


export default () => {
  const ref = React.useRef(null);
  return (
    <>
      <div>
        <h1 align="center">Simulasi</h1>
        <Grid
          border={true}
          square={false}
          gutter={20}
          columnNum={2}
          style={{ marginLeft: "3%", marginRight: "5%" }}
        >
          <Grid.Item onClick={() => window.location.href = "/satesm"} icon={<Image width={44} height={44} src='/simulasi/statesm.png' round />} text='Keadaan Materi' />
          <Grid.Item onClick={() => window.location.href = "/satesb"} icon={<Image width={44} height={44} src='/simulasi/statesb.png' round />} text='Keadaan Materi:Dasar' />
          <Grid.Item onClick={() => window.location.href = "/pgas"} icon={<Image width={44} height={44} src='/simulasi/pgas.png' round />} text='Pengenalan Gas' />
          <Grid.Item onClick={() => window.location.href = "/mcgas"} icon={<Image width={44} height={44} src='/simulasi/mcgas.png' round />} text='Macam-macam Gas' />
          <Grid.Item onClick={() => window.location.href = "/thermal"} icon={<Image width={44} height={44} src='/simulasi/thermal.png' round />} text='Energi Thermal' />
          <Grid.Item onClick={() => window.location.href = "/difusi"} icon={<Image width={44} height={44} src='/simulasi/difusi.png' round />} text='Difusi' />
        </Grid>
      </div>
    </>
  );
};
