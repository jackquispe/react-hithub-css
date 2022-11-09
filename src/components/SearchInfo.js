import search_1 from "../assets/icons/search_1.png";

function SearchInformation(props){
    const {handleInputChange, inputText, searchUser} = props;

    return (
        <div className="search-container">
            <div className="input-container">
                <img width="15" src={search_1} alt="" />
                <input 
                onChange={handleInputChange}
                value={inputText}
                className="input-search" 
                type="text" 
                placeholder="Search GitHub username..." />
            </div>
            <div>
                <button className="btn-search" onClick={searchUser}>Search</button>
            </div>
        </div>
    );
};

export default SearchInformation;