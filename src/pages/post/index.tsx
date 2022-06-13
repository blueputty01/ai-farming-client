import UploadButton from '../../shared/components/Upload';
import Navigate from '../../shared/components/Navigation';
import { useState } from 'react';
import Server from '../../shared/api';
import Diagnosis from '../diagnose/Diagnosis';
import Process from '../../shared/components/Process';

export default function Post() {
  const s = new Server();

  return (
    <main className="flex-col content-center text-center space-y-4">
      <Process
        title={'Plant classification'}
        desc={'Upload image of fruit/vegetable'}
        apiCall={s.getFruit}
      ></Process>
      <Diagnosis></Diagnosis>
    </main>
  );
}
