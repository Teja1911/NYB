import ThemeSwitcher from "./ThemeSwitcher";
import UserCard from "./UserCard";
import Counter from "./Counter";
import ProductCard from "./ProductCard";

function Dashboard() {
    return (
        <div
            style={{
                padding: "20px"
            }}>
            <ThemeSwitcher />
            <hr />
            <UserCard />
            <hr />
            <Counter />
            <hr />
            <ProductCard name="Pizza" price={299}/>
            <ProductCard name="Burger" price={199}/>
            <ProductCard name="Pasta" price={249}/>
        </div>
    )
}

export default Dashboard;