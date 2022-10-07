import { createContext, useEffect, useState } from "react";

//create feedback context as react context
const FeedbackContext = createContext();

//export feedback provider with one param - children
export const FeedbackProvider = ({ children }) => {
  //three states (React objects that contain data about the component)
  const [isLoading, setIsLoading] = useState(true);
  const [feedbacks, setFeedbacks] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  //useEffect hook defines what component needs to do after render (fetch feedbacks)
  useEffect(() => {
    fetchFeedback();
  }, []);

  //functions that use proxy server (redirecting requests to APIs without browser's default request options)

  // asyncAwait fetching feedbacks from the local server
  const fetchFeedback = async () => {
    const response = await fetch(`/feedback?_sort=id&_order=desc`);
    const data = await response.json();

    setFeedbacks(data);
    setIsLoading(false);
  };

  // using POST method to add new feedbacks
  const addFeedback = async (newFeedback) => {
    const response = await fetch(`/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();
    setFeedbacks([data, ...feedbacks]);
  };

  //using DELETE method to remove feedback
  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure that you want to delete this feedback?")) {
      await fetch(`/feedback/${id}`, {
        method: "DELETE",
      });
      setFeedbacks(feedbacks.filter((item) => item.id !== id));
    }
  };

  //set the edit flag with the item that needs to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  //using PUT method to update feedback
  const updateFeedback = async (id, updatedItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    });

    const data = await response.json();
    setFeedbacks(
      feedbacks.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
    //remove the edit flag
    setFeedbackEdit({ item: {}, edit: false });
  };

  //FeedbackProvider wraps the children and provides them all states and the corresponding functions
  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
