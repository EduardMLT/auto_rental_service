import { ArticleHomePage, DivTitle } from './HomePage.styled';
import  MovingText  from './HomePageAnimation';


const HomePage = () => {
  return (
    <>
      <ArticleHomePage>
        <DivTitle>
          Welcome <br /> Auto Rental Service
        </DivTitle>
        <MovingText />
      </ArticleHomePage>
    </>
  );  
};

export default HomePage;
