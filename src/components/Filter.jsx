import { FaArrowUp, FaArrowDown } from 'react-icons/fa';


const Filter = ({ filter, setFilter, setSort }) => {
    return (
        <div className="filter">
            <h2>Filtrar:</h2>
            <div className="filter-options">
                <div>
                    <p>Status:</p>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="Incomplete">Incompletas</option>
                    </select>
                </div>

                <div>
                    <p>Ordem alfabética:</p>
                    <button onClick={() => setSort("Asc")}>
                        <FaArrowUp /> {/* Ícone de seta para cima */}
                    </button>
                    <button onClick={() => setSort("Desc")}>
                        <FaArrowDown /> {/* Ícone de seta para baixo */}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Filter;