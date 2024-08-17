const SecureImage = ({ src, alt }) => (
    <div  style={{ position: 'relative', display: 'inline-block',height:'100%',width:'100%' }}>
      <img 
        src={src} 
        alt={alt} 
        className="profile-image"
        onContextMenu={(e) => e.preventDefault()} 
        draggable="false" 
      />
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
     
        height: '100%', 
        cursor: 'default' 
      }} />
    </div>
  );
  
 export default SecureImage
 