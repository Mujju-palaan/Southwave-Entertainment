"use client";
import { FloatButton } from "antd";
import Link from "next/link";
import { FcGallery } from "react-icons/fc";

const FloatingButton = () => {
  return (
    <Link
      href="https://drive.google.com/drive/folders/1I-J8cTettyEv_QGeB4LyB2I2EQkKPccE?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FloatButton
        shape="circle"
        type="primary"
        icon={<FcGallery size={28} />}
        style={{ insetInlineEnd: 24, marginBottom: "4rem" }}
        // tooltip={`Gallery`}
      />
    </Link>
  );
};

export default FloatingButton;