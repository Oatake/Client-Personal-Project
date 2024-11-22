
import IconAdd from "./IconAdd";
import AddRecipeModal from "./AddRecipeModal";


const modalId = "addRecipe"

export default function AddCard(props) {
  const { keys, getCategoryList } = props;
  

  return (
    <div
      className="btn h-[200px] w-[200px] border-4 mx-2 my-2"
      onClick={() => document.getElementById(modalId).showModal()}
    >
      <IconAdd />
      <AddRecipeModal id={modalId} keys={keys} getCategoryList = {getCategoryList}/>
    </div>
  );
}
