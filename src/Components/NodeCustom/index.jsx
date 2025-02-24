import { Handle, Position } from "@xyflow/react";
import { Button, Modal } from "antd";
import { useState } from "react";

const handleStyle = { left: 10 };

function TextUpdaterNode() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid black", // 🔵 Borda azul (cor do Ant Design)
        borderRadius: "5px",
        background: "#fff",
        boxShadow: "2px 2px 5px rgba(0,0,0,0.2)", // 🔥 Efeito de sombra
        textAlign: "center",
      }}
    >
      {/* Conexões do nó */}
      <Handle type="target" position={Position.Top} />

      {/* Conteúdo do nó */}
      <div>
        <label style={{ display: "block", marginBottom: "5px" }}>
          Criar Departamento:
        </label>
        <Button onClick={() => setOpenModal(true)} className="nodrag">
          Abrir
        </Button>
      </div>

      {/* Conexões do nó */}
      <Handle type="source" position={Position.Bottom} id="a" />

      {/* Modal */}
      <Modal open={openModal} onCancel={() => setOpenModal(false)} footer={null}>
        <h1>Olá Mundo</h1>
      </Modal>
    </div>
  );
}

export default TextUpdaterNode;
