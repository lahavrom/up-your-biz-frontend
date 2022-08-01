import { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllFixedTransactions } from "../../redux/transactions/actions/fetchAllFixedTransactions";
import { fetchAllAccountTransactions } from "../../redux/transactions/actions/fetchAllAccountTransactions";
import TopBar from "../../components/topBar/TopBar";
import Dashboard from "../../components/Dashboard";
import TransactionLog from "../../components/transactionLog/TransactionLog";
import TransactionFormModal from "../../components/transactionForm/TransactionFormModal";
import SuccessToast from "../../components/toasts/SuccessToast";
import ErrorToast from "../../components/toasts/ErrorToast";
import styles from "./upYourLife.module.css";
import AboutComponent from "../../components/aboutComponent/AboutComponent";

const UpYourLifePage = () => {
  const dispatch = useDispatch();

  const isSuccess = useSelector(
    ({ transactionsState }) => transactionsState.isSuccess
  );
  const successMessage = useSelector(
    ({ transactionsState }) => transactionsState.successMessage
  );
  const isError = useSelector(
    ({ transactionsState }) => transactionsState.isError
  );
  const errorMessage = useSelector(
    ({ transactionsState }) => transactionsState.errorMessage
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transactionType, setTransactionType] = useState(null);
  const [editParams, setEditParams] = useState({});
  const [edit, setEdit] = useState(false);

	const onOpenModal = useCallback(() => {
		setIsModalOpen(true);
	}, [setIsModalOpen]);

  const onCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setEdit(false);
  }, [setIsModalOpen]);

  const onAddTransaction = useCallback(
    (type) => {
      setTransactionType(type);
      onOpenModal();
    },
    [setTransactionType, onOpenModal]
  );

  const onEditTransaction = useCallback(
    (type, description, value, category, date, id, accountId) => {
      setTransactionType(type);
      setEdit(true);
      setEditParams({ description, value, category, date, id, accountId });
      onOpenModal();
    }
  );

  const handleFetchData = useCallback(async () => {
    await Promise.all([
      dispatch(fetchAllFixedTransactions()),
      dispatch(fetchAllAccountTransactions()),
    ]);
  }, [dispatch]);

  useEffect(() => {
    handleFetchData();
  }, [handleFetchData]);

  return (
    <div className={styles.container}>
      <SuccessToast isVisible={isSuccess} message={successMessage} />
      <ErrorToast isVisible={isError} message={errorMessage} />
      <TopBar onAddTransaction={onAddTransaction} />
      <div className={styles.contentContainer}>
        <Dashboard />
        <TransactionLog onEditTransaction={onEditTransaction} />
				<AboutComponent />
      </div>
      <TransactionFormModal
        type={transactionType}
        edit={edit}
        editParams={editParams}
        isOpen={isModalOpen}
        onClose={onCloseModal}
      />
    </div>
  );
};

export default UpYourLifePage;
