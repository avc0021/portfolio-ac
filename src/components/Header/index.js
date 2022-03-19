import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Header(props) {

    const {
        categories = [],
        setCurrentCategory,
        contactSelected,
        currentCategory,
        setContactSelected,
      } = props;
  
    return (
      <header className="flex-row px-1">
        <h2>
          <a data-testid="link" href="/">
             Adam Castro
          </a>
        </h2>
        <nav>
          <ul className="flex-row">
            <li className="mx-2">
              <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
                About me
              </a>
            </li>
            <li className={`mx-2 ${contactSelected && 'navActive'}`}>
              <span onClick={() => setContactSelected(true)}>Contact</span>
            </li>
            {categories.map((category) => (
              <li
                className={`mx-1 ${
                  currentCategory.name === category.name && !contactSelected && 'navActive'
                  }`}
                key={category.name}
              >
                <span
                  onClick={() => {
                    setCurrentCategory(category);
                    setContactSelected(false);
                  }}
                >
                  {capitalizeFirstLetter(category.name)}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  }

  export default Header({
    Home: {
      screen: HomeScreen
    },
  }, {
    navigationOptions: {
      headerBackground: () => (
        <Image
          style={StyleSheet.absoluteFill}
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg' }}
        />
      ),
    }
  });