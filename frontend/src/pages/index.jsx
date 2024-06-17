import { useRef, useState } from "react";

import clsx from "clsx";
import { Inter } from "next/font/google";
import Modal from "../components/modal/modal";
import Sidebar from "../components/sidebar/sidebar";
import dynamic from 'next/dynamic';

const Mood = dynamic(() => import("../components/mood/mood"), { ssr: false });

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [showModal, setShowModal] = useState(false);
  const scrollToRef = useRef(null); 

  return (
    <main className={clsx(inter.className, "main")}>
      <Modal
        showModal={showModal}
        closeModal={() => setShowModal(false)}
        scrollToRef={scrollToRef}
      />
      <Mood />
      <Sidebar setShowModal={setShowModal}>
        <div ref={scrollToRef} />
      </Sidebar>
    </main>
  );
}
