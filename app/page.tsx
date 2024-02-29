'use client'

import DesktopTable from './components/desktop-table';
import React from 'react';
import MobileTable from './components/mobile-table';

export default function Home() {
  return (
    <main className='test-tables p-6'>
      <DesktopTable />
      <MobileTable />
    </main>
  );
}