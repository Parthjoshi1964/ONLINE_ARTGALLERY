import React, { useState } from 'react';

function SubmenuWithImages() {
  const [showNewImages, setShowNewImages] = useState(false);

  const toggleSubMenu = () => {
    setShowNewImages(prevState => !prevState);
  };

  return (
    <div>
      <ul>
        <li onClick={toggleSubMenu}>Main Menu
          <ul className="submenu">
            {showNewImages ? (
              <>
                <li><img src="new_image1.jpg" alt="New Image 1" /></li>
                <li><img src="new_image2.jpg" alt="New Image 2" /></li>
                {/* Add more new images as needed */}
              </>
            ) : (
              <>
                <li><img src="old_image1.jpg" alt="Old Image 1" /></li>
                <li><img src="old_image2.jpg" alt="Old Image 2" /></li>
                {/* Add more old images as needed */}
              </>
            )}
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default SubmenuWithImages;
