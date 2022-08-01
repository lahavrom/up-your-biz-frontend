import { useState } from "react";
import {
	Tab,
	Icon,
	MenuButton,
	Menu,
	MenuItem,
	Heading,
	IconButton,
} from "monday-ui-react-core";
import {
	NavigationChevronLeft,
	NavigationChevronRight,
	Download,
	Upload,
	Add,
	Person,
} from "monday-ui-react-core/dist/allIcons";

import logo from "../../../src/assets/logo.png";
import styles from "./topBar.module.css";
import { MONTHS } from "../../helpers/constants";

const TopBar = ({ onAddTransaction }) => {
	const currentMonth = new Date().getMonth();
	const [monthSelected, setMonthSelected] = useState(currentMonth);

	const handleAssigneeOnClickRight = () => {
		setMonthSelected((prev) => {
			if (prev === MONTHS.length - 1) {
				return prev;
			}
			return prev + 1;
		});
	};

	const handleAssigneeOnClickLeft = () => {
		setMonthSelected((prev) => {
			if (prev > 0) {
				return prev - 1;
			}
			return 0;
		});
	};

	return (
		<div className={styles.topBar}>
			<span className={styles.heading}>
				<img src={logo} alt="Logo" className={styles.logo} />

				<Heading type={Heading.types.h1} value="Up Your Life" brandFont />
			</span>
			<span className={styles.monthPickerContainer}>
				<Icon
					iconType={Icon.type.SVG}
					icon={NavigationChevronLeft}
					iconLabel="arrowLeft"
					iconSize={20}
					onClick={handleAssigneeOnClickLeft}
				/>

				<span className={styles.monthPicker}>
					<Tab>{`${MONTHS[monthSelected]} 2022`}</Tab>
				</span>
				<Icon
					iconType={Icon.type.SVG}
					icon={NavigationChevronRight}
					iconLabel="arrowRight"
					iconSize={20}
					onClick={handleAssigneeOnClickRight}
				/>
			</span>
			<span className={styles.buttons}>
				<MenuButton
					component={Add}
					text="New Transaction"
					className={styles.addButton}
				>
					<Menu id="menu" size={Menu.sizes.MEDIUM}>
						<MenuItem
							icon={Download}
							iconType={MenuItem.iconType.SVG}
							title="Income"
							onClick={() => onAddTransaction("Income")}
						/>
						<MenuItem
							icon={Upload}
							iconType={MenuItem.iconType.SVG}
							title="Expense"
							onClick={() => onAddTransaction("Expense")}
						/>
					</Menu>
				</MenuButton>
				<IconButton
					icon={Person}
					kind={IconButton.kinds.SECONDARY}
					className={styles.profileButton}
				/>
			</span>
		</div>
	);
};

export default TopBar;
