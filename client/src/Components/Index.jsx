
import QRCode from "react-qr-code";
import { useParams } from 'react-router-dom';

const Index = () => {
  const { "*" : fullUrl } = useParams(); // Capture the wildcard route

  console.log(fullUrl, "Captured URL");

  return (
    <>
      <div style={{ marginLeft: '50px' }}>
        <h3>URL: {fullUrl}</h3>
        <QRCode value={fullUrl} />
      </div>
    </>
  );
};

export default Index;
