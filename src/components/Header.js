import React from 'react';
import { Toast, NavBar } from 'react-vant';
import { WarningO } from '@react-vant/icons'

function Header() {
  return (
    <NavBar
    fixed={true}
    title="Teman Fisika"
    leftText="kembali"
    rightText={<WarningO/>}
    onClickLeft={() => window.history.back('kembali')}
    onClickRight={() => Toast('按钮')}
  />
  );
}

export default Header;
