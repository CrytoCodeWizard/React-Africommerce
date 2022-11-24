import React from 'react';
import DashboardSidebar from './DashboardSidebar';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`;
const Page = styled.div`
  margin: 0 auto;
  background: red;
`;

const Container = styled.div`
  /* height: 50vh; */
  top: 0;
  margin: 0 auto;
  background: rgb(242, 243, 248);
`;

function ManageProfile() {
  return (
    <Card>
      <div>
        <DashboardSidebar />
      </div>
      <div>
          <div>Manage Profile</div>
          <div>
            <div>Basic Info</div>
            <div>
              <form>
              </form>
            </div>
          </div>
      </div>
    </Card>
  );
};

export default ManageProfile;
